import React from 'react'
import App from 'next/app'
import BlinkLabrador from "@aller/blink-labrador";

export default class MyApp extends App {
    componentDidMount() {
        const tracker = new BlinkLabrador();
        tracker.trackPageload();
        tracker.trackAdInscreen0(".adunit");
        tracker.trackAdInscreen(".adunit");
        tracker.trackActiveTime();
        tracker.trackLinkClicks();
        tracker.trackArticleImpressions("article.preview,.article-list>li");
        tracker.trackAdDFP();
        // Expose blink functions to other modules
        window.trackAdLoad = tracker.trackAdLoad;
        window.trackCustom = tracker.trackCustom;
        window.pageInit = tracker.pageInit;
        window.trackPageload = () => { tracker.trackPageload() };
    }

  render () {
    const { Component, pageProps } = this.props
    return (
        <Component {...pageProps} />
    )
  }
}