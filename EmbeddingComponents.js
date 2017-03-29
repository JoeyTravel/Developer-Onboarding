var Badge = React.createClass({
  render: function() {
    return <button>
      {this.props.title} - {this.props.number}
    </button>
  }
});

