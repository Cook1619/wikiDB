import React, { Component } from 'react';

class Article extends Component {

    fetchArticles = () => {
        fetch('')
            .then(res => res.json())
            .then(json => console.log(json));
    }
    componentDidMount() {
        this.fetchArticles();
    }

    render() {
        console.log()
        return (
            <div>
                Test
                <h1>Test</h1>
                blah
            </div>
        )
    }
}

export default Article;