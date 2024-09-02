

# YOLOv8

### Overview

YOLOv8 (You Only Look Once, version 8) is the latest iteration in the YOLO series of real-time object detection models developed by Ultralytics. It introduces improvements in speed, accuracy, and flexibility, making it suitable for a wide range of computer vision tasks such as object detection, segmentation, and classification.

### Features

- **Object Detection:** Detect objects in images and videos in real time.
- **Instance Segmentation:** Perform pixel-level segmentation for object instances.
- **Classification:** Classify objects within images.
- **Training and Fine-Tuning:** Train YOLOv8 models from scratch or fine-tune pre-trained models.
- **Export to Multiple Formats:** Export models to ONNX, TensorFlow, CoreML, and other formats for deployment.

### Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ultralytics/ultralytics.git
   cd ultralytics
   ```

2. **Create a Virtual Environment:**

   ```bash
   python -m venv env
   source env/bin/activate  # On Windows use `env\Scripts\activate`
   ```

3. **Install Dependencies:**

   ```bash
   pip install ultralytics
   ```

4. **Verify Installation:**

   ```bash
   yolo --help
   ```

   This should display the YOLO CLI help message, confirming the installation is successful.

### Usage

- **Train a Model:**

  ```bash
  yolo train data=coco128.yaml model=yolov8n.pt epochs=100
  ```

- **Validate a Model:**

  ```bash
  yolo val model=yolov8n.pt data=coco128.yaml
  ```

- **Run Inference on Images:**

  ```bash
  yolo predict model=yolov8n.pt source='path/to/images'
  ```

- **Export a Model to ONNX Format:**
  ```bash
  yolo export model=yolov8n.pt format=onnx
  ```

### Supported Models

YOLOv8 supports multiple model sizes for different use cases:

- **YOLOv8n (Nano):** Fast and lightweight, suitable for edge devices.
- **YOLOv8s (Small):** Balanced for speed and accuracy.
- **YOLOv8m (Medium):** Suitable for a range of general use cases.
- **YOLOv8l (Large):** High accuracy, suitable for more demanding applications.
- **YOLOv8x (Extra Large):** Highest accuracy, suited for tasks where performance is crucial.

### Contribution Guidelines

- **Reporting Issues:** If you encounter any bugs or have questions, please open an issue in the [GitHub Issues tab](https://github.com/ultralytics/ultralytics/issues).
- **Submitting Pull Requests:** Fork the repository, make your changes, and submit a pull request with a detailed description of your changes.

### License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/ultralytics/ultralytics/blob/main/LICENSE) file for more details.

### Acknowledgments

YOLOv8 is developed by Ultralytics and is a continuation of the original YOLO (You Only Look Once) series. Special thanks to all contributors and the community for their continued support.
