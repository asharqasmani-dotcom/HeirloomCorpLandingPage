import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ContactForm } from '../components/ContactForm';
import { navigationItems } from '../data/navigation';

describe('Header component', () => {
  it('renders the Heirloom Legacy logo and direct section links with no dropdowns', () => {
    render(<Header />);
    expect(screen.getAllByAltText('Heirloom Legacy, Inc.').length).toBeGreaterThanOrEqual(1);

    const nav = screen.getByRole('navigation', { name: /main navigation/i });
    const links = within(nav).getAllByRole('link');
    expect(links.map((l) => l.textContent?.trim())).toEqual(
      navigationItems.map((i) => i.label)
    );
    expect(links.map((l) => l.getAttribute('href'))).toEqual(navigationItems.map((i) => i.href));
    expect(within(nav).queryByRole('menu')).not.toBeInTheDocument();
  });

  it('renders the Partner With Us CTA pointing at the contact section', () => {
    render(<Header />);
    const ctas = screen.getAllByRole('link', { name: /partner with us/i });
    expect(ctas.length).toBeGreaterThanOrEqual(1);
    expect(ctas[0]).toHaveAttribute('href', '#contact');
  });

  it('toggles mobile menu drawer on button click', () => {
    render(<Header />);
    fireEvent.click(screen.getByLabelText(/open navigation menu/i));
    expect(screen.getByLabelText(/close navigation menu/i)).toBeInTheDocument();
  });
});

describe('Hero component', () => {
  it('renders the nonprofit headline and static highlight bar', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Building a Legacy of Stability Through Community and Partnership/i
    );
    expect(screen.getByText(/community stability/i)).toBeInTheDocument();
    expect(screen.getByText(/meaningful partnerships/i)).toBeInTheDocument();
    expect(screen.getByText(/lasting community impact/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /connect with us/i })).toHaveAttribute('href', '#contact');
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });
});

describe('ContactForm component', () => {
  it('renders all four fields and the send button', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/inquiry type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send inquiry/i })).toBeInTheDocument();
  });

  it('shows accessible validation errors on empty submit', async () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByRole('button', { name: /send inquiry/i }));
    await waitFor(() => {
      const alerts = screen.getAllByRole('alert');
      expect(alerts.length).toBeGreaterThanOrEqual(4);
    });
    expect(screen.getByLabelText(/full name/i)).toHaveAttribute('aria-invalid', 'true');
  });

  it('does not show a success message when no backend is configured', async () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Jordan Ellis' } });
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'jordan@example.org' } });
    fireEvent.change(screen.getByLabelText(/inquiry type/i), { target: { value: 'General Inquiry' } });
    fireEvent.change(screen.getByLabelText(/^message/i), {
      target: { value: 'Interested in learning more about your mission.' },
    });
    fireEvent.click(screen.getByRole('button', { name: /send inquiry/i }));

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent(/not yet connected/i);
    });
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });
});
