import { lazy } from "react";
import { NoLazyPage } from "../01-lazy-load/pages";

type JSXComponent = () => JSX.Element;

interface IRoutes {
	Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
	exact?: boolean;
	lazy?: boolean;
	name: string;
	path: string;
	to: string;
};

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout"*/ "../01-lazy-load/layouts/LazyLayout"));

export const routes:IRoutes[] = [
	{
		to: '/lazyload/',
		path: '/lazyload/*',
		Component: LazyLayout,
		name: 'LazyLayout'
	},
	{
		to: '/nolazy3',
		path: 'nolazy3',
		Component: NoLazyPage,
		name: 'NoLazyPage'
	}
];