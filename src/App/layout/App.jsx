import React, { Component } from 'react';
import { Navigation, Footer, Sidebar } from 'App/components';
import { Route, Switch } from 'react-router-dom';
import routes from '../Routes';
import { Loading } from 'App/views';
import ModalCustom from 'App/molekuls/ModalCustom';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: 'primary',
            loading: true,
            sidebar: false
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
        let device;
        if (window.innerWidth > 993 ) {
            device = 'desktop'
        } else if (window.innerWidth >= 599 && window.innerWidth < 990) {
            device = 'tablet'
        } else if (window.innerWidth < 589) {
            device = 'mobile'
        }
        return this.setState({ loading:false, device: device});
    }

    handleThemeClick = theme => {
        this.setState({ theme: theme });
    };

    handleSidebarClick = status => {
        this.setState({ sidebar: status });
    };

    getRoutes = (routes) => {
        return routes.map((prop, key) => {
            return (
                <Route 
                    key={key}
                    path={prop.path}
                    render={props => 
                        <prop.component {...this.state} name={prop.name} {...props} />
                    }
                    exact />
            );
        });
    }
    render() {
        return (
            <>
                {
                    this.state.loading ? 
                        <Loading />
                    :
                        <div className="wrapper" data-sidebar={this.state.sidebar} data-theme={this.state.theme}>
                            <Sidebar 
                                handleSidebarClick={this.handleSidebarClick}
                                {...this.state} />
                            <Navigation 
                                handleThemeClick={this.handleThemeClick}
                                handleSidebarClick={this.handleSidebarClick}
                                theme={this.state["theme"]} />
                            <Switch>{this.getRoutes(routes)}</Switch>
                            <Footer {...this.state} />
                            <ModalCustom theme={this.state.theme} show={this.props.modal.status} />
                        </div>
                }
            </>
        )
    }
}

const mapStateToProps = state => ({
    modal: state.Modal
});

export default connect(mapStateToProps)(App);
