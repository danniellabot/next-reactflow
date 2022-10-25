// test TextFieldComponent renders correctly
// test TextFieldComponent handles onChange event
// test TextFieldComponent handles onBlur event
// test TextFieldComponent hides password

import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react';
import TextFieldComponent from './index'

describe('TextFieldComponent', () => {

    const props = {
        label: 'Test',
        name: 'test',
        value: 'test',
        onChange: jest.fn(),
        onBlur: jest.fn(),
    }

    it('renders correctly', () => {
        const tree = renderer.create(<TextFieldComponent />).toJSON()
        expect(tree).toMatchSnapshot()
    })
    
    it('handles onChange event', () => {
        const onChange = jest.fn()
        const tree = renderer.create(<TextFieldComponent onChange={onChange} />).toJSON()
        tree.props.onChange()
        expect(onChange).toHaveBeenCalled()
    })
    
    it('handles onBlur event', () => {
        const onBlur = jest.fn()
        const tree = renderer.create(<TextFieldComponent onBlur={onBlur} />).toJSON()
        tree.props.onBlur()
        expect(onBlur).toHaveBeenCalled()
    })
    
    it('hides password', () => {
        const tree = renderer.create(<TextFieldComponent type="password" />).toJSON()
        expect(tree).toMatchSnapshot()
    })
    }
)