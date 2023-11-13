/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Fox as Fox0 } from "../models";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import Fox from "./Fox";
import { Collection } from "@aws-amplify/ui-react";
export default function FoxCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Fox0,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "FoxCollection")}
      {...rest}
    >
      {(item, index) => (
        <Fox
          fox={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Fox>
      )}
    </Collection>
  );
}
