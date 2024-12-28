"use client";

import { useState } from "react";
import { Group, Stack, Text } from "@mantine/core";
import { Dropzone, FileWithPath } from "@mantine/dropzone";
import { IconTrash } from "@tabler/icons-react";

export const Drop = () => {
  const [files, setFiles] = useState<FileWithPath[]>([]);

  const handleDrop = (files: FileWithPath[]) => {
    setFiles(files);
  };

  const handleTrash = () => {
    setFiles([]);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", files[0]);

    fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
  };

  const filename = files[0]?.name;

  return (
    <Stack align="center">
      {files.length > 0 ? (
        <Group justify="space-between">
          <Text size="xl" inline>
            {filename}
          </Text>
          <IconTrash onClick={handleTrash} />
        </Group>
      ) : (
        <Dropzone onDrop={handleDrop} maxSize={5 * 1024 ** 2}>
          <Text size="xl" inline>
            ファイルをドラッグ&ドロップするか、ここをクリックしてアップロードできます
          </Text>
        </Dropzone>
      )}
      <input
        type="button"
        disabled={files.length === 0}
        value="送信"
        onClick={handleSubmit}
      />
    </Stack>
  );
};
