import React, { Component } from 'react';
import axios from 'axios';

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: []
        }
    }

    // fetchArticles = () => {
    //     axios.get('http://localhost:3001/articles')
    //         .then(res => console.log(res.data))
    //         .catch(err => console.log(err));
    // }
    fetchArticles = async () => {
        try {
            let res = await axios.get('http://localhost:3001/articles');
            this.setState({
                articles: res.data
            });
        } catch (e) {
            console.log(e);
        }
    }
    componentDidMount() {
        this.fetchArticles();
    }

    render() {
        console.log(this.state)
        return (
            <div>
                Hello WOrld!
            </div>
        )
    }
}

export default Article;