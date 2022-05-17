// add, delete, update, display shopping list
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from './App';
import { ListProvider } from './context/ListProvider';

describe('App', () => {
  it('should render a shopping list and allow user to ADD item to list', async () => {
    render(
      <ListProvider>
        <App />
      </ListProvider>
    );

    const input = screen.getByPlaceholderText('add item');
    const addButton = screen.getByTitle('Add item');
    
    userEvent.type(input, 'bananas');
    userEvent.click(addButton);

    const item = await screen.findByText('bananas');
    expect(item).toBeInTheDocument();
  });

  it.skip('onCLick, should allow user to UPDATE shopping list item', async () => {

  });

  it.skip('onClick, should allow user to DELETE item', async () => {

  });
});