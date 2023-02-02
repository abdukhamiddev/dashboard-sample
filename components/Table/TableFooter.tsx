import React from "react";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const TableFooter = React.forwardRef<HTMLDivElement, Props>(
  function TableFooter(props, ref) {
    const { className, children, ...other } = props;

    return (
      <div
        className={clsx(
          "px-4 py-3 border-t dark:border-gray-700 bg-gray-50 text-gray-500 dark:text-gray-400 dark:bg-gray-800",
          className
        )}
        ref={ref}
        {...other}
      >
        {children}
      </div>
    );
  }
);
export default TableFooter;
