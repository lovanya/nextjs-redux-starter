import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { connect } from 'react-redux';

import { getTopRepos } from 'store/actions/repos';
import SearchResults from 'components/SearchResults';

class SearchRepoContainer extends Component {
  // static async getInitialProps({ store, query }) {
  //   // 此处会运行服务端代码，用于处理页面的数据初始化或者路由判断
  //   // const lang = query.lang || "javascript";
  //   // await store.dispatch(getTopRepos({ lang }));
  //   return { lang: 'javascript' };
  // }

  componentDidMount() {
    const { getTopRepos } = this.props;
    getTopRepos({ lang: 'ruby' });
  }

  handleChange = e => {
    const { getTopRepos } = this.props;
    getTopRepos({ lang: e.target.value });
  };

  render() {
    const { repos } = this.props;
    return (
      <Fragment>
        <div onClick={this._goToAbout}>
          GO TO ABOUT (with <code>router</code>)
        </div>
        <p>
          <input value={this.props.repos.lang} onChange={this.handleChange} />
        </p>
        <SearchResults repos={repos} />
      </Fragment>
    );
  }

  _goToAbout = () => {
    this.props.router.push('/about');
  };
}

function mapStateToProps(state) {
  return {
    repos: state.repos
  };
}

SearchRepoContainer.propTypes = {
  name: PropTypes.string,
  repos: PropTypes.instanceOf(Map).isRequired,
  getTopRepos: PropTypes.func.isRequired
};

export { SearchRepoContainer };
export default connect(mapStateToProps, {
  getTopRepos
})(SearchRepoContainer);
