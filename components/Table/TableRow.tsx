import React from "react";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLTableRowElement> {}

const TableRow = React.forwardRef<HTMLTableRowElement, Props>(function TableRow(
  props,
  ref
) {
  const { className, children, ...other } = props;

  return (
    <tr className={className} ref={ref} {...other}>
      {children}
    </tr>
  );
});

export default TableRow;
