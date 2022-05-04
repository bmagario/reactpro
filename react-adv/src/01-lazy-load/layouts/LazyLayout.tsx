import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

const childRoutes = [
	{
		to: 'lazy1',
		path: 'lazy1',
		Component: LazyPage1,
		name: 'Lazy1'
	},
	{
		to: 'lazy2',
		path: 'lazy2',
		Component: LazyPage2,
		name: 'Lazy2'
	},
	{
		to: 'lazy3',
		path: 'lazy3',
		Component: LazyPage3,
		name: 'Lazy3'
	},
];

export const LazyLayout = () => {
	return (
		<div>
			<h1>LazyLayoutPage</h1>

			<ul>
				{
					childRoutes.map((route) => (
							<li key={ route.path }>
									<NavLink 
											to={ route.path }
											className={ ({ isActive }) => isActive ? 'nav-active' : '' }
									>
											{ route.name }
									</NavLink>
							</li>
					))
				}
			</ul>


			<Routes>
				{
					childRoutes.map((route) => (
							<Route 
									key={ route.path }
									path={ route.path }
									element={ <route.Component /> } 
							/>
					))
				}
				<Route path='*' element={ <Navigate to={ childRoutes[0].to } replace /> } />
			</Routes>
		</div>
	)
}

export default LazyLayout;