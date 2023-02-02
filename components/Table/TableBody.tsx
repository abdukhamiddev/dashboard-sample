import React, { useContext } from "react";
import clsx from "clsx";
interface Props extends React.HTMLAttributes<HTMLTableSectionElement> {}

const TableBody = React.forwardRef<HTMLTableSectionElement, Props>(
  function TableBody(props, ref) {
    const { className, children, ...other } = props;

    return (
      <tbody
        className={clsx(
          "bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400",
          className
        )}
        ref={ref}
        {...other}
      >
        {children}
      </tbody>
    );
  }
);

export default TableBody;
