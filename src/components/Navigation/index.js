import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import Timezone from '~/components/date'

import StoreContext from '~/context/StoreContext'
import {
	CartCounter, 
	Container,
	MenuLink,
	Wrapper
} from './styles'

const useQuantity = () => {
	const { store: {checkout} } = useContext(StoreContext)
	const items = checkout ? checkout.lineItems : []
	const total = reduce(items, (acc, item) => acc + item.quantity, 0)
	return [total !== 0, total]
}

const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()

	return(
	<header className="width-100% border-bottom position-fixed z-index-3 flex justify-center">
			<Container className="flex justify-between width-100%">
				<MenuLink className="glitch color-contrast-higher text-md" data-text={siteTitle} to='/'>
					{siteTitle}
				</MenuLink>
        <div class="">
        <MenuLink className="glitch color-contrast-higher text-md" data-text='Blog' to='/'>
					Blog
				</MenuLink>
        <MenuLink className="glitch color-contrast-higher text-md margin-left-sm" data-text='Contact' to='/'>
         Contact
				</MenuLink>
        </div>
			</Container>
	</header>
	)
}

Navigation.propTypes = {
	siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
	siteTitle: ``,
}

export default Navigation
