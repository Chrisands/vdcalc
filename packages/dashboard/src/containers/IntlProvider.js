import { connect } from 'react-redux'
import { addLocaleData, IntlProvider } from 'react-intl'
import ruLocaleData from 'react-intl/locale-data/ru'

addLocaleData(ruLocaleData)

export default connect(
  state => ({
    defaultLocale: 'ru',
    locale: state.locale.locale,
    messages: {},
  }),
)(IntlProvider)
