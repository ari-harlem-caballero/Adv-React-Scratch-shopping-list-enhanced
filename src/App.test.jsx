// add, delete, update, display shopping list
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
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

  it('onCLick, should allow user to UPDATE shopping list item', async () => {
    render(
      <ListProvider>
        <App />
      </ListProvider>
    );
    
    const editButton = screen.getByLabelText('Edit happiness');
    userEvent.click(editButton);

    const editInput = screen.getByLabelText('Edit field');
    userEvent.type(editInput, '!!!');
    
    const saveButton = screen.getByTitle('Save button');
    userEvent.click(saveButton);

    // await waitForElementToBeRemoved(screen.getByTitle('Save button'));

    await screen.findByText('happiness!!!');
  });

  it.skip('onClick, should allow user to DELETE item', async () => {

  });
});