"use client";
import { FileUploaderRegular } from "@uploadcare/react-uploader/next";
import "@uploadcare/react-uploader/core.css";

type UploadCareButtonProps = {
  onUpload: (file: any) => void;
};

const UploadCareButton = ({ onUpload }: UploadCareButtonProps) => {
  return (
    <div>
      <FileUploaderRegular
        sourceList="local, url, camera, dropbox"
        classNameUploader="uc-dark"
        pubkey="ec43e6e4cab9f8adebba"
      />
    </div>
  );
};

export default UploadCareButton;
