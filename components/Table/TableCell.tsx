import React, { useContext } from "react";
import clsx from "clsx";

interface Props extends React.TdHTMLAttributes<HTMLTableCellElement> {}

const TableCell = React.forwardRef<HTMLTableCellElement, Props>(
  function TableCell(props, ref) {
    const { className, children, ...other } = props;

    return (
      <td className={clsx("px-4 py-3", className)} ref={ref} {...other}>
        {children}
      </td>
    );
  }
);

export default TableCell;
