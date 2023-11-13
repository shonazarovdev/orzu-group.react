import React from "react";
import { Routes, Route } from "react-router-dom"
import Page from "../../pages";
import data from '../../data/routes.json';

const AppRouter = ({}) => {
	return (
		<Routes>
			{ data.data.map(e => (
				<Route key={ e.id } path={ e.path } element={ <Page page={ e.category } /> } />
			)) }
		</Routes>
	);
}

export default AppRouter;