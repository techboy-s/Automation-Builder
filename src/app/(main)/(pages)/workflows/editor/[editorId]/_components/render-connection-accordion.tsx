import { Connection } from "@/lib/types";
import { EditorState } from "@/providers/editor-provider";
import React from "react";

type Props = {};

const RenderConnectionAccordion = ({
  connection,
  state,
}: {
  connection: Connection;
  state: EditorState;
}) => {
  return <div>RenderConnectionAccordion</div>;
};

export default RenderConnectionAccordion;
