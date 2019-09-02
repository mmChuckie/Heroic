import Pages from './pages'
import User from './data/user'
import {RouteComponentProps} from 'react-router'

export interface IRedux {
	pages: Pages,
	website: IWebsite
	session: ISession
}

export interface IWebsite {
	SITE_NAME: string
}

export interface ISession {
	active: boolean,
	ready: boolean,
	user: User| null
}

export type Page = {
	data: any[],
	loaded: boolean
}

export default interface Connect extends IRedux, RouteComponentProps {

}
