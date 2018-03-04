import * as React from "react";

export class Processor extends React.Component<{}, {}> {
    public render() {
        return (<div className="container">
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img
                        src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    Bootstrap
                </a>
            </nav>
            <div className="row">
                <div className="col-sm">
                    One of three columns
                </div>
                <div className="col-sm">
                    One of three columns
                </div>
                <div className="col-sm">
                    One of three columns
                </div>
            </div>
        </div>);
    }
}