import React, { Component } from 'react'

// Todo:
//  Socket Server for drag n' dropping the order of achievements
//  Sci fi screen achievements list
// API Requests
export default class AchievementsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            achievements: []
        }
    }

    componentDidMount() {
        // Put it all together
    }

    fetchCurrentGame() {
        // Twtich API Request to fetch current game
    }

    fetchAppId() {
        // Steam API Request to fetch app id for current game
    }

    fetchAchievements(appId) {
        // Steam API request to fetch achievements for current app id
    }
    
    render() {
        return (
            <div>
                Achievements List
            </div>
        )
    }
}