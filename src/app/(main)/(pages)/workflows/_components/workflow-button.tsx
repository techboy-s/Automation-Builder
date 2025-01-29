// src/app/(main)/(pages)/workflows/_components/workflow-button.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useModal } from "@/providers/modal-provider";
import CustomModal from "@/app/components/global/custom-modal";
import WorkflowForms from "@/app/components/forms/workflow-form";

const WorkflowButton = () => {
  const { isOpen, setOpen, setClose } = useModal();

  const handleClick = () => {
    setOpen(
      <CustomModal
        isOpen={isOpen}
        onClose={setClose}
        title="Create a Workflow Automation"
        subheading="Workflows are a powerful tool that help you automate tasks."
      >
        <WorkflowForms />
      </CustomModal>
    );
  };

  return (
    <Button size="icon" onClick={handleClick}>
      <Plus />
    </Button>
  );
};

export default WorkflowButton;
