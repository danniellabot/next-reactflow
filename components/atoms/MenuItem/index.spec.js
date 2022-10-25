// test MenuItemComponent renders correctly
// test onClick event is handled using fireEvent
// props object

import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import MenuItemComponent from './index';

describe('MenuItemComponent', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<MenuItemComponent />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('handles onClick event', () => {
        const props = {
            label: 'Test',
            onClick: jest.fn(),
        };
        const { getByText } = render(<MenuItemComponent {...props} />);
        fireEvent.click(getByText(props.label));
        expect(props.onClick).toHaveBeenCalled();
    });
}
)




