import { mount } from 'cypress-ct-qwik';
import * as Dialog from './dialog';

describe('Dialog', () => {
  it('renders an opened Dialog', () => {
    mount(
      <Dialog.Root>
        <Dialog.Trigger>
          <button>Open</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          {/* Dialog.Header */}
          {/* Dialog.Content */}
          {/* Dialog.Actions/Footer */}
          <h2 data-test="dialog-title">Hello World!</h2>
        </Dialog.Portal>
      </Dialog.Root>
    );

    cy.get('button').contains(/open/i).click();

    cy.get('[data-test=dialog-title]')
      .should('be.visible')
      .should('contain', 'Hello World');
  });

  it('closes on backdrop-click', () => {
    mount(
      <Dialog.Root>
        <Dialog.Trigger>
          <button>Open</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <h2 data-test="dialog-title">Hello World!</h2>
        </Dialog.Portal>
      </Dialog.Root>
    );

    cy.get('button').contains(/open/i).click();

    cy.get('dialog').click('top');

    cy.get('dialog').should('not.be.visible');
  });

  it('does not show if Dialog is closed', () => {
    mount(
      <Dialog.Root>
        <Dialog.Trigger>
          <button>Open</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <h2>Hello World!</h2>
        </Dialog.Portal>
      </Dialog.Root>
    );

    cy.get('dialog').should('not.be.visible');
  });
});
