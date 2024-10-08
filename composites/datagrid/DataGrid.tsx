'use client';

import React, { useContext } from 'react';
import { RightSidebarContext } from '../../../../app/bizz-lines/inventory-supply-chain/scm/components/right-sidebar';
import { Product } from '../../../../shared/grpc/generated/product';
import styles from './DataGrid.module.scss';
import {
  Button,
  Div,
  Input,
  Label,
  Table,
  TBody,
  Td,
  Th,
  THead,
  Tr,
} from '../../basics';
import { IconUpdate } from '../../common/icons/IconUpdate';
import classNames from "classnames";

const DataGrid = ({ data }: { data?: Product[] }) => {
  const { setConfig, setSchema, setEvents } = useContext(RightSidebarContext);

  const handleOpenRightSidebar = () => {
    setConfig({ isOpen: true });

    setEvents({
      onOK: (pairs) => {
        console.log('--- onOK pairs', pairs);
      },
      onCancel: () => {
        console.log('--- onCancel');
      },
    });
    setSchema({
      id: {
        placeholder: '1',
      },
      name: {
        placeholder: 'Pablo Rios',
        onValueChanged: (newName) => {
          console.log('---xxx', newName);
        },
      },
    });
  };

  return (
    <Table>
      <THead>
        <Tr>
          <Th scope="col" className={styles.headerCell}>
            <Div className="flex items-center" bnVariant="primary">
              <Input
                id="checkbox-all"
                aria-describedby="checkbox-1"
                type="checkbox"
                className={styles.checkboxInput}
              />
              <Label htmlFor="checkbox-all" className={styles.checkboxLabel}>
                checkbox
              </Label>
            </Div>
          </Th>
          <Th scope="col" className={styles.headerCell}>
            Product Name
          </Th>
          <Th scope="col" className={styles.headerCell}>
            Description
          </Th>
          <Th scope="col" className={styles.headerCell}>
            Price
          </Th>
          <Th scope="col" className={styles.headerCell}>
            Actions
          </Th>
        </Tr>
      </THead>
      <TBody>
        {data
          ? data.map((product) => (
              <Tr key={product.id}>
                <Td className={styles.checkboxCell}>
                  <Div className="flex items-center">
                    <Input
                      id={`checkbox-${product.id}`}
                      aria-describedby="checkbox-1"
                      type="checkbox"
                      className={styles.checkboxInput}
                    />
                    <label
                      htmlFor={`checkbox-${product.id}`}
                      className={styles.checkboxLabel}
                    >
                      checkbox
                    </label>
                  </Div>
                </Td>
                <Td className={styles.productName}>
                  <Div className={styles.productNameHeader}>{product.name}</Div>
                  <Div>{product.name}</Div>
                </Td>
                <Td>{product.description}</Td>
                <Td>{product.price}</Td>
                <Td className={styles.actionsCell}>
                  <Button
                    type="button"
                    // bnSize="lg"
                    // className={classNames(styles.actionButton)}
                    bnVariant="accent"
                    // bnIsLoading={true}
                    //   disabled={true}
                    onClick={handleOpenRightSidebar}
                  >
                    <IconUpdate />
                    Update
                  </Button>
                  <Button
                    type="button"
                    bnVariant="secondary"
                    // className={classNames(styles.actionButton, styles.deleteButton)}
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))
          : null}
      </TBody>
    </Table>
  );
};

export default DataGrid;
