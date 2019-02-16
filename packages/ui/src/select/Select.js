import React from 'react'
import ReactSelect, { components } from 'react-select'
import { CloseIcon, DropdownIcon } from '../icons'

const styles = {
  clearIndicator: () => ({
    display: 'flex',
    padding: '8px 8px 8px 12px',
  }),
  container: () => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
  }),
  control: (provided, state) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    transition: '0.2s',
    outline: 'none',

    width: '100%',
    height: '32px',
    minHeight: '0',
    border: 'none',
    borderRadius: '16px',
    backgroundColor: '#EEE',
    boxSizing: 'border-box',
    boxShadow: state.isFocused ? '0 0 4px 0 rgba(102, 102, 102, 0.5) !important' : '',
    '&:hover': {
      boxShadow: 'inset 0 0 4px 0 rgba(0, 0, 0, 0.5)',
    },
  }),
  dropdownIndicator: () => ({
    display: 'flex',
    padding: '8px 12px 8px 8px',
  }),
  group: () => ({}),
  groupHeading: () => ({}),
  indicatorsContainer: () => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }),
  indicatorSeparator: (provided, state) => ({
    backgroundColor: state.isClearable ? '#BBB' : 'transparent',
    height: '16px',
    width: '1px',
  }),
  input: () => ({
    position: 'absolute',
    left: '12px',
    display: 'flex',
    alignItems: 'center',
    transition: '0.2s',
    outline: 'none',
    width: 'calc(100% - 12px)',

    backgroundColor: 'transparent',
    border: 'none',


    fontFamily: 'Montserrat, sans-serif',
    fontSize: '14px',
    fontWeight: '400',
    color: '#000',
  }),
  loadingIndicator: () => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    transition: '0.2s',
    flex: '0 0 32px',
    height: '32px',
    padding: '0 12px',
    borderRadius: '16px',

    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'normal',
    fontSize: '14px',
    color: '#BBB',
    lineHeight: 1.2,
  }),
  loadingMessage: () => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    transition: '0.2s',
    flex: '0 0 32px',
    height: '32px',
    padding: '0 12px',
    borderRadius: '16px',

    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'normal',
    fontSize: '14px',
    color: '#BBB',
    lineHeight: 1.2,
  }),
  menu: () => ({
    position: 'absolute',
    top: '100%',
    width: '100%',
    margin: '4px 0',
    borderRadius: '16px',
    overflowX: 'hidden',
    overflowY: 'auto',
    boxShadow: '0 2px 6px 0 rgba(102, 102, 102, 0.5)',
    outline: 'none',
    zIndex: '10',
  }),
  menuList: provided => ({
    ...provided,
    padding: '0',
  }),
  menuPortal: () => ({}),
  multiValue: () => ({}),
  multiValueLabel: () => ({}),
  multiValueRemove: () => ({}),
  noOptionsMessage: () => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    transition: '0.2s',
    flex: '0 0 32px',
    height: '32px',
    padding: '0 12px',
    borderRadius: '16px',

    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'normal',
    fontSize: '14px',
    color: '#BBB',
    lineHeight: 1.2,
  }),
  option: (provided, state) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: state.isFocused ? '#EEE' : '#FFF',
    transition: '0.2s',
    flex: '0 0 32px',
    height: '32px',
    padding: '0 12px',

    '&:first-child': {
      borderRadius: '16px 16px 0 0',
    },
    '&:last-child': {
      borderRadius: '0 0 16px 16px',
    },

    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'normal',
    fontSize: '14px',
    color: state.isFocused ? '#666' : '#BBB',
    lineHeight: 1.2,
    '&:hover': {
      backgroundColor: '#EEE',
      color: '#666',
    },
  }),
  placeholder: () => ({
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '14px',
    fontWeight: '400',
    color: '#BBB',
  }),
  singleValue: () => ({
    position: 'absolute',
    left: '12px',
    display: 'flex',
    alignItems: 'center',
    transition: '0.2s',
    outline: 'none',
    width: 'calc(100% - 12px)',

    backgroundColor: 'transparent',
    border: 'none',


    fontFamily: 'Montserrat, sans-serif',
    fontSize: '14px',
    fontWeight: '400',
    color: '#000',
  }),
  valueContainer: () => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '0 12px',
    position: 'relative',
  }),
}

const DropdownIndicator = props => (
  <components.DropdownIndicator {...props}>
    <DropdownIcon />
  </components.DropdownIndicator>
)

const ClearIndicator = props => (
  <components.ClearIndicator {...props}>
    <CloseIcon />
  </components.ClearIndicator>
)

const Select = ({
  value,
  onChange,
  options,
  placeholder = '',
  ...props
}) => (
  <ReactSelect
    components={{
      DropdownIndicator,
      ClearIndicator,
    }}
    styles={styles}
    value={value}
    maxMenuHeight={160}
    isClearable
    options={options}
    onChange={onChange}
    placeholder={placeholder}
    {...props}
  />
)

export default Select
