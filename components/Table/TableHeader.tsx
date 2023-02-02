import React, { useContext } from "react";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLTableSectionElement> {}

const TableHeader = React.forwardRef<HTMLTableSectionElement, Props>(
  function TableHeader(props, ref) {
    const { className, children, ...other } = props;

    return (
      <thead
        className={clsx(
          "text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800",
          className
        )}
        ref={ref}
        {...other}
      >
        {children}
      </thead>
    );
  }
);

export default TableHeader;
