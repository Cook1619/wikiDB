import React, { Component } from 'react';
import axios from 'axios';

class Article extends Component {

    fetchArticles = () => {
        axios.get('http://localhost:3001/articles')
            .then(res => console.log(res.data))
            
            .catch(err => console.log(err));
    }
    componentDidMount() {
        this.fetchArticles();
    }

    render() {
        console.log()
        return (
            <div>
            Hello WOrld!
            </div>
        )
    }
}

export default Article;