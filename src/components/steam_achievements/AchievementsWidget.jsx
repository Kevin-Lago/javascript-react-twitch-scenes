import React, { Component } from 'react';


export default class AchievementsWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            game: "",
            appId: "",
            achievements: []
        }
    }
    
    render() {
        return(
            <div>
                Achievements Widget
            </div>
        )
    }
}