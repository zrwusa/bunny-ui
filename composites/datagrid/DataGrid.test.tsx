import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import DataGrid from './DataGrid';
import {
  RightSidebar,
  RightSidebarContext,
} from '../../../../app/bizz-lines/inventory-supply-chain/scm/components/right-sidebar';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Product } from '../../../../app/bizz-lines/inventory-supply-chain/scm/types';

const mockSetConfig = vi.fn();
const mockSetSchema = vi.fn();
const mockSetEvents = vi.fn();

const data: Product[] = [
  {
    id: '5f684086-5d21-4e14-b92d-3cd22c3a64d8',
    create_at: '2024-09-04T14:31:28.487Z',
    update_at: '2024-09-04T14:31:28.487Z',
    title: 'Canon EOS 1500D DSLR Camera with 18-55mm Lens',
    description:
      'Designed for first-time DSLR owners who want impressive results straight out of the box, capture those magic moments no matter your level with the EOS 1500D. With easy to use automatic shooting modes, large 24.1 MP sensor, Canon Camera Connect app integration and built-in feature guide, EOS 1500D is always ready to go.',
    price: '168.98',
    image: 'https://i.imgur.com/QlRphfQ.jpg',
  },
  {
    id: '5f684086-5d21-4e14-b92d-3cd22c3a64d8',
    create_at: '2024-09-04T14:31:28.487Z',
    update_at: '2024-09-04T14:31:28.487Z',
    title: 'Canon EOS 1500D DSLR Camera with 18-55mm Lens',
    description:
      'Designed for first-time DSLR owners who want impressive results straight out of the box, capture those magic moments no matter your level with the EOS 1500D. With easy to use automatic shooting modes, large 24.1 MP sensor, Canon Camera Connect app integration and built-in feature guide, EOS 1500D is always ready to go.',
    price: '168.98',
    image: 'https://i.imgur.com/QlRphfQ.jpg',
  },
  {
    id: '5f684086-5d21-4e14-b92d-3cd22c3a64d8',
    create_at: '2024-09-04T14:31:28.487Z',
    update_at: '2024-09-04T14:31:28.487Z',
    title: 'Canon EOS 1500D DSLR Camera with 18-55mm Lens',
    description:
      'Designed for first-time DSLR owners who want impressive results straight out of the box, capture those magic moments no matter your level with the EOS 1500D. With easy to use automatic shooting modes, large 24.1 MP sensor, Canon Camera Connect app integration and built-in feature guide, EOS 1500D is always ready to go.',
    price: '168.98',
    image: 'https://i.imgur.com/QlRphfQ.jpg',
  },
];

describe('DataGrid Component', () => {
  beforeEach(() => {
    render(
      <RightSidebarContext.Provider
        value={{
          config: { isOpen: true },
          schema: {},
          setConfig: mockSetConfig,
          setSchema: mockSetSchema,
          setEvents: mockSetEvents,
        }}
      >
        <DataGrid data={data} />
        <RightSidebar />
      </RightSidebarContext.Provider>,
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should render the correct number of products', () => {
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(data.length + 1); // including header row
  });

  it('should handle "details" button click and open the right sidebar', () => {
    const $detailButtons = screen.getAllByRole('button', { name: /details/i });

    // Click the "details" button for the first product
    fireEvent.click($detailButtons[0]);

    expect(mockSetConfig).toHaveBeenCalledWith({ isOpen: true });
    expect(mockSetEvents).toHaveBeenCalledWith({
      onOK: expect.any(Function),
      onCancel: expect.any(Function),
    });
    expect(mockSetSchema).toHaveBeenCalledWith({
      id: { placeholder: '1' },
      name: {
        placeholder: 'Pablo Rios',
        onValueChanged: expect.any(Function),
      },
    });
  });

  it('should display the correct product details', () => {
    for (const item of data) {
      expect(screen.getByText(item.title)).toBeDefined();
      expect(screen.queryByText(item.description)).toBeDefined();
      expect(screen.queryByText(item.price)).toBeDefined();
    }
  });
});