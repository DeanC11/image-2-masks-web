import { useFilePicker } from "use-file-picker";
import { Button } from "@mantine/core";

const ImageSelect = () => {
  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: false,
    maxFileSize: 50, // in Megabytes
    // imageSizeRestrictions: {
    //   maxHeight: 900, // in pixels
    //   maxWidth: 1600,
    //   minHeight: 600,
    //   minWidth: 768,
    // },
  });

  return (
    <div>
      <Button
        onClick={openFileSelector}
        variant="gradient"
        gradient={{ from: "violet", to: "blue" }}
        fullWidth
      >
        Select image
      </Button>
    </div>
  );
};

export default ImageSelect;
