import React from 'react';
import styled from 'styled-components';
import { Map } from 'immutable';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 300px;
  padding: 1em;
  margin: 1em auto;
`;
const Item = styled.li`
  background: #eee;
  padding: 4px 12px;
  :hover {
    a {
      color: #eee;
    }
    background: ${props => props.theme.colors.primary};
  }
`;

const REPO_COUNT = 10;
const SearchResults = ({ repos }) => {
  const count = (repos.get('totalCount') && repos.get('totalCount').toLocaleString()) || 0;

  const list = (repos.get('items') && repos.get('items').take(REPO_COUNT)) || [];
  return (
    <Container>
      <h2>
        Top {REPO_COUNT} {repos.get('lang')} repos
      </h2>

      <small>{count} repos found</small>
      <ul>
        {list.map(item => (
          <Item key={item.get('id')}>
            <a href={item.get('htmlUrl')} target="_blank">
              {item.get('name')}
            </a>
          </Item>
        ))}
      </ul>
    </Container>
  );
};

SearchResults.propTypes = {
  repos: PropTypes.instanceOf(Map).isRequired
};

export default SearchResults;
