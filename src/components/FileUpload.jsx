"use client";

import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/dropzone";
import { useSupabaseUpload } from "@/hooks/use-supabase-upload";

const FileUpload = () => {
  const props = useSupabaseUpload({
    bucketName: "sd019",
    path: "images",
    allowedMimeTypes: ["image/*"],
    maxFiles: 3,
    maxFileSize: 1000 * 1000 * 10, // 10MB,
  });

  return (
    <div className="w-[500px]">
      <Dropzone {...props}>
        <DropzoneEmptyState />
        <DropzoneContent />
      </Dropzone>
    </div>
  );
};

export { FileUpload };
