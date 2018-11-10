import React, {Component} from 'react';
import './buttonList.scss';
import PropTypes from 'prop-types';

export default class ButtonList extends Component {

    constructor(props) {
        super(props);
        this.onMenuClick = this.onMenuClick.bind(this);
    }

    onMenuClick(obj) {
        if (typeof this.props.onMenuClick === "function") {
            this.props.onMenuClick(obj);
        }
    }

    menuItems() {

        const menuItems = [];
        for (let i = 0; i < this.props.buttons.length; i++) {
            const buttonObject = this.props.buttons[i];
            const buttonName = buttonObject.name;

            menuItems.push(
                (<div className={`item`} key={buttonObject.id} onClick={() => this.onMenuClick(buttonObject)}>
                    {buttonName}
                </div>)
            );

        }
        return (
            <div className="menuGrid">
                {menuItems}
            </div>);
    }

    render() {
        return (
            <div className="menu">
                <div className="gridWrapper">
                    <div className="gridMiddleCentered">
                        {this.menuItems()}
                    </div>
                </div>
            </div>
        );
    }
}

ButtonList.propTypes = {
    buttons: PropTypes.array.isRequired,
    onMenuClick: PropTypes.func
};
// Expects all buttons to have a name property !!!!

ButtonList.defaultProps = {
    collections: ['configure', 'your', 'button', 'items']
};
