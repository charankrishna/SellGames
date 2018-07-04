import PropTypes from 'prop-types';
import React from 'react';
import { Label } from 'semantic-ui-react';
import GamesCard from "./GamesCard";

const categoryRenderer = ({ name }) => <Label as={'span'} content={name} />

categoryRenderer.propTypes = {
    name: PropTypes.string,
}

const resultRenderer = ({ title }) => <Label content={title} />

resultRenderer.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    cost:PropTypes.integer,
    image:PropTypes.string,
    release:PropTypes.string
}

const SearchExampleCategoryCustom = () => (
    <GamesCard categoryRenderer={categoryRenderer} resultRenderer={resultRenderer} />
)

export default SearchExampleCategoryCustom;