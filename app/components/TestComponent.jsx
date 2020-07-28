import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';
window.$ = window.jQuery = $;

import Utils from '../assets/js/utils.js';
const util = new Utils;

class TestComponent extends React.Component {
  constructor(props) {

    //  The constructor for a React component is called before it is mounted.
    //  When implementing the constructor for a React.Component subclass, you should call super(props) before any other statement.
    //  Otherwise, this.props will be undefined in the constructor, which can lead to bugs.

    //  Avoid introducing any side-effects or subscriptions in the constructor.
    //  For those use cases, use componentDidMount() instead.

    //  The constructor is the right place to initialize state.
    //  To do so, just assign an object to this.state; don’t try to call setState() from the constructor.
    //  The constructor is also often used to bind event handlers to the class instance.


    //  Call Super Class
    super(props);

    

    this.state ={
      className:""
    }

    //  Bind Costum Methods
    this.handleChildren = this.handleChildren.bind(this);
    this.methodSample = this.methodSample.bind(this);

  }



  handleChildren(){
    return
  }

  methodSample() {
    //  sample Method
    this.setState({
      Omega: '26'
    });

    console.log('state: ',this.state);
    console.log('props: ',this.props);

  }

 

  //  --- React Mounting Cycle Methods --- //
  componentWillMount(){
    //  componentWillMount() is invoked immediately before mounting occurs.
    //  It is called before render(), therefore calling setState() synchronously in this method will not trigger an extra rendering.
    //  Generally, we recommend using the constructor() instead.

    //  Avoid introducing any side-effects or subscriptions in this method.
    //  For those use cases, use componentDidMount() instead.

    //  This is the only lifecycle hook called on server rendering.

    
    util.getContent(this,this.props.contentId,(entry) => {
      //foo
     });
  }

  componentDidMount(){
    //  componentDidMount() is invoked immediately after a component is mounted.
    //  Initialization that requires DOM nodes should go here.
    //  If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
    //Set Dom Attribute, eg, Class, Attr, etc
    if(this.props.className != void(0)){
      this.setState({
        className:this.props.className
      });
    }

    this.methodSample();

  }


  componentWillReceiveProps(nextProps){
    //  componentWillReceiveProps() is invoked before a mounted component receives new props.
    //  If you need to update the state in response to prop changes (for example, to reset it),
    //  you may compare this.props and nextProps and perform state transitions using this.setState() in this method.
  }


  componentWillUpdate(){
    //  componentWillUpdate() is invoked immediately before rendering when new props or state are being received.
    //  Use this as an opportunity to perform preparation before an update occurs. This method is not called for the initial render.
  }


  componentDidUpdate(prevProps, prevState){
    // componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
  }


  componentWillUnmount(){
    //  componentWillUnmount() is invoked immediately before a component is unmounted and destroyed.
  }

  render() {
    //  Our "HTML"
    if(this.state.entry === void(0)){
      return (
        <div className={this.state.className}>
          Loading content...
        </div>
      );
    }else{
      return (
        <div className={this.state.className}>
          <h1>{this.state.entry.fields.title}</h1><br/>
        </div>
      );
    }
    
  }


}

export default TestComponent;
