# DirectoryStructure of YOLOv8

```
ultralytics
    ├── CITATION.cff
    ├── CONTRIBUTING.md
    ├── docker
    │   ├── Dockerfile
    │   ├── Dockerfile-arm64
    │   ├── Dockerfile-conda
    │   ├── Dockerfile-cpu
    │   ├── Dockerfile-jetson-jetpack4
    │   ├── Dockerfile-jetson-jetpack5
    │   ├── Dockerfile-jetson-jetpack6
    │   ├── Dockerfile-python
    │   └── Dockerfile-runner
    ├── docs
    │   ├── build_docs.py
    │   ├── build_reference.py
    │   ├── coming_soon_template.md
    │   ├── en
    │   │   ├── CNAME
    │   │   ├── datasets
    │   │   │   ├── classify
    │   │   │   │   ├── caltech101.md
    │   │   │   │   ├── caltech256.md
    │   │   │   │   ├── cifar100.md
    │   │   │   │   ├── cifar10.md
    │   │   │   │   ├── fashion-mnist.md
    │   │   │   │   ├── imagenet10.md
    │   │   │   │   ├── imagenet.md
    │   │   │   │   ├── imagenette.md
    │   │   │   │   ├── imagewoof.md
    │   │   │   │   ├── index.md
    │   │   │   │   └── mnist.md
    │   │   │   ├── detect
    │   │   │   │   ├── african-wildlife.md
    │   │   │   │   ├── argoverse.md
    │   │   │   │   ├── brain-tumor.md
    │   │   │   │   ├── coco8.md
    │   │   │   │   ├── coco.md
    │   │   │   │   ├── globalwheat2020.md
    │   │   │   │   ├── index.md
    │   │   │   │   ├── lvis.md
    │   │   │   │   ├── objects365.md
    │   │   │   │   ├── open-images-v7.md
    │   │   │   │   ├── roboflow-100.md
    │   │   │   │   ├── signature.md
    │   │   │   │   ├── sku-110k.md
    │   │   │   │   ├── visdrone.md
    │   │   │   │   ├── voc.md
    │   │   │   │   └── xview.md
    │   │   │   ├── explorer
    │   │   │   │   ├── api.md
    │   │   │   │   ├── dashboard.md
    │   │   │   │   ├── explorer.ipynb
    │   │   │   │   └── index.md
    │   │   │   ├── index.md
    │   │   │   ├── obb
    │   │   │   │   ├── dota8.md
    │   │   │   │   ├── dota-v2.md
    │   │   │   │   └── index.md
    │   │   │   ├── pose
    │   │   │   │   ├── coco8-pose.md
    │   │   │   │   ├── coco.md
    │   │   │   │   ├── index.md
    │   │   │   │   └── tiger-pose.md
    │   │   │   ├── segment
    │   │   │   │   ├── carparts-seg.md
    │   │   │   │   ├── coco8-seg.md
    │   │   │   │   ├── coco.md
    │   │   │   │   ├── crack-seg.md
    │   │   │   │   ├── index.md
    │   │   │   │   └── package-seg.md
    │   │   │   └── track
    │   │   │       └── index.md
    │   │   ├── guides
    │   │   │   ├── analytics.md
    │   │   │   ├── azureml-quickstart.md
    │   │   │   ├── conda-quickstart.md
    │   │   │   ├── coral-edge-tpu-on-raspberry-pi.md
    │   │   │   ├── data-collection-and-annotation.md
    │   │   │   ├── deepstream-nvidia-jetson.md
    │   │   │   ├── defining-project-goals.md
    │   │   │   ├── distance-calculation.md
    │   │   │   ├── docker-quickstart.md
    │   │   │   ├── heatmaps.md
    │   │   │   ├── hyperparameter-tuning.md
    │   │   │   ├── index.md
    │   │   │   ├── instance-segmentation-and-tracking.md
    │   │   │   ├── isolating-segmentation-objects.md
    │   │   │   ├── kfold-cross-validation.md
    │   │   │   ├── model-deployment-options.md
    │   │   │   ├── model-deployment-practices.md
    │   │   │   ├── model-evaluation-insights.md
    │   │   │   ├── model-monitoring-and-maintenance.md
    │   │   │   ├── model-testing.md
    │   │   │   ├── model-training-tips.md
    │   │   │   ├── nvidia-jetson.md
    │   │   │   ├── object-blurring.md
    │   │   │   ├── object-counting.md
    │   │   │   ├── object-cropping.md
    │   │   │   ├── optimizing-openvino-latency-vs-throughput-modes.md
    │   │   │   ├── parking-management.md
    │   │   │   ├── preprocessing_annotated_data.md
    │   │   │   ├── queue-management.md
    │   │   │   ├── raspberry-pi.md
    │   │   │   ├── region-counting.md
    │   │   │   ├── ros-quickstart.md
    │   │   │   ├── sahi-tiled-inference.md
    │   │   │   ├── security-alarm-system.md
    │   │   │   ├── speed-estimation.md
    │   │   │   ├── steps-of-a-cv-project.md
    │   │   │   ├── streamlit-live-inference.md
    │   │   │   ├── triton-inference-server.md
    │   │   │   ├── view-results-in-terminal.md
    │   │   │   ├── vision-eye.md
    │   │   │   ├── workouts-monitoring.md
    │   │   │   ├── yolo-common-issues.md
    │   │   │   ├── yolo-performance-metrics.md
    │   │   │   └── yolo-thread-safe-inference.md
    │   │   ├── help
    │   │   │   ├── CI.md
    │   │   │   ├── CLA.md
    │   │   │   ├── code_of_conduct.md
    │   │   │   ├── contributing.md
    │   │   │   ├── environmental-health-safety.md
    │   │   │   ├── FAQ.md
    │   │   │   ├── index.md
    │   │   │   ├── minimum_reproducible_example.md
    │   │   │   ├── privacy.md
    │   │   │   └── security.md
    │   │   ├── hub
    │   │   │   ├── api
    │   │   │   │   └── index.md
    │   │   │   ├── app
    │   │   │   │   ├── android.md
    │   │   │   │   ├── index.md
    │   │   │   │   └── ios.md
    │   │   │   ├── cloud-training.md
    │   │   │   ├── datasets.md
    │   │   │   ├── index.md
    │   │   │   ├── inference-api.md
    │   │   │   ├── integrations.md
    │   │   │   ├── models.md
    │   │   │   ├── projects.md
    │   │   │   ├── pro.md
    │   │   │   ├── quickstart.md
    │   │   │   └── teams.md
    │   │   ├── index.md
    │   │   ├── integrations
    │   │   │   ├── amazon-sagemaker.md
    │   │   │   ├── clearml.md
    │   │   │   ├── comet.md
    │   │   │   ├── coreml.md
    │   │   │   ├── dvc.md
    │   │   │   ├── edge-tpu.md
    │   │   │   ├── google-colab.md
    │   │   │   ├── gradio.md
    │   │   │   ├── ibm-watsonx.md
    │   │   │   ├── index.md
    │   │   │   ├── jupyterlab.md
    │   │   │   ├── kaggle.md
    │   │   │   ├── mlflow.md
    │   │   │   ├── ncnn.md
    │   │   │   ├── neural-magic.md
    │   │   │   ├── onnx.md
    │   │   │   ├── openvino.md
    │   │   │   ├── paddlepaddle.md
    │   │   │   ├── paperspace.md
    │   │   │   ├── ray-tune.md
    │   │   │   ├── roboflow.md
    │   │   │   ├── tensorboard.md
    │   │   │   ├── tensorrt.md
    │   │   │   ├── tf-graphdef.md
    │   │   │   ├── tfjs.md
    │   │   │   ├── tflite.md
    │   │   │   ├── tf-savedmodel.md
    │   │   │   ├── torchscript.md
    │   │   │   ├── vscode.md
    │   │   │   └── weights-biases.md
    │   │   ├── macros
    │   │   │   ├── export-args.md
    │   │   │   └── export-table.md
    │   │   ├── models
    │   │   │   ├── fast-sam.md
    │   │   │   ├── index.md
    │   │   │   ├── mobile-sam.md
    │   │   │   ├── rtdetr.md
    │   │   │   ├── sam-2.md
    │   │   │   ├── sam.md
    │   │   │   ├── yolo-nas.md
    │   │   │   ├── yolov10.md
    │   │   │   ├── yolov3.md
    │   │   │   ├── yolov4.md
    │   │   │   ├── yolov5.md
    │   │   │   ├── yolov6.md
    │   │   │   ├── yolov7.md
    │   │   │   ├── yolov8.md
    │   │   │   ├── yolov9.md
    │   │   │   └── yolo-world.md
    │   │   ├── modes
    │   │   │   ├── benchmark.md
    │   │   │   ├── export.md
    │   │   │   ├── index.md
    │   │   │   ├── predict.md
    │   │   │   ├── track.md
    │   │   │   ├── train.md
    │   │   │   └── val.md
    │   │   ├── quickstart.md
    │   │   ├── reference
    │   │   │   ├── cfg
    │   │   │   │   └── __init__.md
    │   │   │   ├── data
    │   │   │   │   ├── annotator.md
    │   │   │   │   ├── augment.md
    │   │   │   │   ├── base.md
    │   │   │   │   ├── build.md
    │   │   │   │   ├── converter.md
    │   │   │   │   ├── dataset.md
    │   │   │   │   ├── explorer
    │   │   │   │   │   ├── explorer.md
    │   │   │   │   │   ├── gui
    │   │   │   │   │   │   └── dash.md
    │   │   │   │   │   └── utils.md
    │   │   │   │   ├── loaders.md
    │   │   │   │   ├── split_dota.md
    │   │   │   │   └── utils.md
    │   │   │   ├── engine
    │   │   │   │   ├── exporter.md
    │   │   │   │   ├── model.md
    │   │   │   │   ├── predictor.md
    │   │   │   │   ├── results.md
    │   │   │   │   ├── trainer.md
    │   │   │   │   ├── tuner.md
    │   │   │   │   └── validator.md
    │   │   │   ├── hub
    │   │   │   │   ├── auth.md
    │   │   │   │   ├── google
    │   │   │   │   │   └── __init__.md
    │   │   │   │   ├── __init__.md
    │   │   │   │   ├── session.md
    │   │   │   │   └── utils.md
    │   │   │   ├── models
    │   │   │   │   ├── fastsam
    │   │   │   │   │   ├── model.md
    │   │   │   │   │   ├── predict.md
    │   │   │   │   │   ├── utils.md
    │   │   │   │   │   └── val.md
    │   │   │   │   ├── nas
    │   │   │   │   │   ├── model.md
    │   │   │   │   │   ├── predict.md
    │   │   │   │   │   └── val.md
    │   │   │   │   ├── rtdetr
    │   │   │   │   │   ├── model.md
    │   │   │   │   │   ├── predict.md
    │   │   │   │   │   ├── train.md
    │   │   │   │   │   └── val.md
    │   │   │   │   ├── sam
    │   │   │   │   │   ├── amg.md
    │   │   │   │   │   ├── build.md
    │   │   │   │   │   ├── model.md
    │   │   │   │   │   ├── modules
    │   │   │   │   │   │   ├── blocks.md
    │   │   │   │   │   │   ├── decoders.md
    │   │   │   │   │   │   ├── encoders.md
    │   │   │   │   │   │   ├── memory_attention.md
    │   │   │   │   │   │   ├── sam.md
    │   │   │   │   │   │   ├── tiny_encoder.md
    │   │   │   │   │   │   ├── transformer.md
    │   │   │   │   │   │   └── utils.md
    │   │   │   │   │   └── predict.md
    │   │   │   │   ├── utils
    │   │   │   │   │   ├── loss.md
    │   │   │   │   │   └── ops.md
    │   │   │   │   └── yolo
    │   │   │   │       ├── classify
    │   │   │   │       │   ├── predict.md
    │   │   │   │       │   ├── train.md
    │   │   │   │       │   └── val.md
    │   │   │   │       ├── detect
    │   │   │   │       │   ├── predict.md
    │   │   │   │       │   ├── train.md
    │   │   │   │       │   └── val.md
    │   │   │   │       ├── model.md
    │   │   │   │       ├── obb
    │   │   │   │       │   ├── predict.md
    │   │   │   │       │   ├── train.md
    │   │   │   │       │   └── val.md
    │   │   │   │       ├── pose
    │   │   │   │       │   ├── predict.md
    │   │   │   │       │   ├── train.md
    │   │   │   │       │   └── val.md
    │   │   │   │       ├── segment
    │   │   │   │       │   ├── predict.md
    │   │   │   │       │   ├── train.md
    │   │   │   │       │   └── val.md
    │   │   │   │       └── world
    │   │   │   │           ├── train.md
    │   │   │   │           └── train_world.md
    │   │   │   ├── nn
    │   │   │   │   ├── autobackend.md
    │   │   │   │   ├── modules
    │   │   │   │   │   ├── activation.md
    │   │   │   │   │   ├── block.md
    │   │   │   │   │   ├── conv.md
    │   │   │   │   │   ├── head.md
    │   │   │   │   │   ├── transformer.md
    │   │   │   │   │   └── utils.md
    │   │   │   │   └── tasks.md
    │   │   │   ├── solutions
    │   │   │   │   ├── ai_gym.md
    │   │   │   │   ├── analytics.md
    │   │   │   │   ├── distance_calculation.md
    │   │   │   │   ├── heatmap.md
    │   │   │   │   ├── object_counter.md
    │   │   │   │   ├── parking_management.md
    │   │   │   │   ├── queue_management.md
    │   │   │   │   ├── speed_estimation.md
    │   │   │   │   └── streamlit_inference.md
    │   │   │   ├── trackers
    │   │   │   │   ├── basetrack.md
    │   │   │   │   ├── bot_sort.md
    │   │   │   │   ├── byte_tracker.md
    │   │   │   │   ├── track.md
    │   │   │   │   └── utils
    │   │   │   │       ├── gmc.md
    │   │   │   │       ├── kalman_filter.md
    │   │   │   │       └── matching.md
    │   │   │   └── utils
    │   │   │       ├── autobatch.md
    │   │   │       ├── benchmarks.md
    │   │   │       ├── callbacks
    │   │   │       │   ├── base.md
    │   │   │       │   ├── clearml.md
    │   │   │       │   ├── comet.md
    │   │   │       │   ├── dvc.md
    │   │   │       │   ├── hub.md
    │   │   │       │   ├── mlflow.md
    │   │   │       │   ├── neptune.md
    │   │   │       │   ├── raytune.md
    │   │   │       │   ├── tensorboard.md
    │   │   │       │   └── wb.md
    │   │   │       ├── checks.md
    │   │   │       ├── dist.md
    │   │   │       ├── downloads.md
    │   │   │       ├── errors.md
    │   │   │       ├── files.md
    │   │   │       ├── __init__.md
    │   │   │       ├── instance.md
    │   │   │       ├── loss.md
    │   │   │       ├── metrics.md
    │   │   │       ├── ops.md
    │   │   │       ├── patches.md
    │   │   │       ├── plotting.md
    │   │   │       ├── tal.md
    │   │   │       ├── torch_utils.md
    │   │   │       ├── triton.md
    │   │   │       └── tuner.md
    │   │   ├── robots.txt
    │   │   ├── solutions
    │   │   │   └── index.md
    │   │   ├── tasks
    │   │   │   ├── classify.md
    │   │   │   ├── detect.md
    │   │   │   ├── index.md
    │   │   │   ├── obb.md
    │   │   │   ├── pose.md
    │   │   │   └── segment.md
    │   │   ├── usage
    │   │   │   ├── callbacks.md
    │   │   │   ├── cfg.md
    │   │   │   ├── cli.md
    │   │   │   ├── engine.md
    │   │   │   ├── python.md
    │   │   │   └── simple-utilities.md
    │   │   └── yolov5
    │   │       ├── environments
    │   │       │   ├── aws_quickstart_tutorial.md
    │   │       │   ├── azureml_quickstart_tutorial.md
    │   │       │   ├── docker_image_quickstart_tutorial.md
    │   │       │   └── google_cloud_quickstart_tutorial.md
    │   │       ├── index.md
    │   │       ├── quickstart_tutorial.md
    │   │       └── tutorials
    │   │           ├── architecture_description.md
    │   │           ├── clearml_logging_integration.md
    │   │           ├── comet_logging_integration.md
    │   │           ├── hyperparameter_evolution.md
    │   │           ├── model_ensembling.md
    │   │           ├── model_export.md
    │   │           ├── model_pruning_and_sparsity.md
    │   │           ├── multi_gpu_training.md
    │   │           ├── neural_magic_pruning_quantization.md
    │   │           ├── pytorch_hub_model_loading.md
    │   │           ├── roboflow_datasets_integration.md
    │   │           ├── test_time_augmentation.md
    │   │           ├── tips_for_best_training_results.md
    │   │           ├── train_custom_data.md
    │   │           └── transfer_learning_with_frozen_layers.md
    │   ├── mkdocs_github_authors.yaml
    │   ├── overrides
    │   │   ├── assets
    │   │   │   └── favicon.ico
    │   │   ├── javascript
    │   │   │   └── extra.js
    │   │   ├── main.html
    │   │   ├── partials
    │   │   │   ├── comments.html
    │   │   │   └── source-file.html
    │   │   └── stylesheets
    │   │       └── style.css
    │   └── README.md
    ├── examples
    │   ├── heatmaps.ipynb
    │   ├── hub.ipynb
    │   ├── object_counting.ipynb
    │   ├── object_tracking.ipynb
    │   ├── README.md
    │   ├── tutorial.ipynb
    │   ├── YOLOv8-Action-Recognition
    │   │   ├── action_recognition.py
    │   │   ├── readme.md
    │   │   └── requirements.txt
    │   ├── YOLOv8-CPP-Inference
    │   │   ├── CMakeLists.txt
    │   │   ├── inference.cpp
    │   │   ├── inference.h
    │   │   ├── main.cpp
    │   │   └── README.md
    │   ├── YOLOv8-LibTorch-CPP-Inference
    │   │   ├── CMakeLists.txt
    │   │   ├── main.cc
    │   │   └── README.md
    │   ├── YOLOv8-ONNXRuntime
    │   │   ├── main.py
    │   │   └── README.md
    │   ├── YOLOv8-ONNXRuntime-CPP
    │   │   ├── CMakeLists.txt
    │   │   ├── inference.cpp
    │   │   ├── inference.h
    │   │   ├── main.cpp
    │   │   └── README.md
    │   ├── YOLOv8-ONNXRuntime-Rust
    │   │   ├── Cargo.toml
    │   │   ├── README.md
    │   │   └── src
    │   │       ├── cli.rs
    │   │       ├── lib.rs
    │   │       ├── main.rs
    │   │       ├── model.rs
    │   │       ├── ort_backend.rs
    │   │       └── yolo_result.rs
    │   ├── YOLOv8-OpenCV-int8-tflite-Python
    │   │   ├── main.py
    │   │   └── README.md
    │   ├── YOLOv8-OpenCV-ONNX-Python
    │   │   ├── main.py
    │   │   └── README.md
    │   ├── YOLOv8-OpenVINO-CPP-Inference
    │   │   ├── CMakeLists.txt
    │   │   ├── inference.cc
    │   │   ├── inference.h
    │   │   ├── main.cc
    │   │   └── README.md
    │   ├── YOLOv8-Region-Counter
    │   │   ├── readme.md
    │   │   └── yolov8_region_counter.py
    │   ├── YOLOv8-SAHI-Inference-Video
    │   │   ├── readme.md
    │   │   └── yolov8_sahi.py
    │   └── YOLOv8-Segmentation-ONNXRuntime-Python
    │       ├── main.py
    │       └── README.md
    ├── LICENSE
    ├── mkdocs.yml
    ├── pyproject.toml
    ├── README.md
    ├── README.zh-CN.md
    ├── tests
    │   ├── conftest.py
    │   ├── __init__.py
    │   ├── test_cli.py
    │   ├── test_cuda.py
    │   ├── test_engine.py
    │   ├── test_explorer.py
    │   ├── test_exports.py
    │   ├── test_integrations.py
    │   ├── test_python.py
    │   └── test_solutions.py
    └── ultralytics
        ├── assets
        │   ├── bus.jpg
        │   └── zidane.jpg
        ├── cfg
        │   ├── datasets
        │   │   ├── african-wildlife.yaml
        │   │   ├── Argoverse.yaml
        │   │   ├── brain-tumor.yaml
        │   │   ├── carparts-seg.yaml
        │   │   ├── coco128-seg.yaml
        │   │   ├── coco128.yaml
        │   │   ├── coco8-pose.yaml
        │   │   ├── coco8-seg.yaml
        │   │   ├── coco8.yaml
        │   │   ├── coco-pose.yaml
        │   │   ├── coco.yaml
        │   │   ├── crack-seg.yaml
        │   │   ├── dota8.yaml
        │   │   ├── DOTAv1.5.yaml
        │   │   ├── DOTAv1.yaml
        │   │   ├── GlobalWheat2020.yaml
        │   │   ├── ImageNet.yaml
        │   │   ├── lvis.yaml
        │   │   ├── Objects365.yaml
        │   │   ├── open-images-v7.yaml
        │   │   ├── package-seg.yaml
        │   │   ├── signature.yaml
        │   │   ├── SKU-110K.yaml
        │   │   ├── tiger-pose.yaml
        │   │   ├── VisDrone.yaml
        │   │   ├── VOC.yaml
        │   │   └── xView.yaml
        │   ├── default.yaml
        │   ├── __init__.py
        │   ├── models
        │   │   ├── README.md
        │   │   ├── rt-detr
        │   │   │   ├── rtdetr-l.yaml
        │   │   │   ├── rtdetr-resnet101.yaml
        │   │   │   ├── rtdetr-resnet50.yaml
        │   │   │   └── rtdetr-x.yaml
        │   │   ├── v10
        │   │   │   ├── yolov10b.yaml
        │   │   │   ├── yolov10l.yaml
        │   │   │   ├── yolov10m.yaml
        │   │   │   ├── yolov10n.yaml
        │   │   │   ├── yolov10s.yaml
        │   │   │   └── yolov10x.yaml
        │   │   ├── v3
        │   │   │   ├── yolov3-spp.yaml
        │   │   │   ├── yolov3-tiny.yaml
        │   │   │   └── yolov3.yaml
        │   │   ├── v5
        │   │   │   ├── yolov5-p6.yaml
        │   │   │   └── yolov5.yaml
        │   │   ├── v6
        │   │   │   └── yolov6.yaml
        │   │   ├── v8
        │   │   │   ├── yolov8-cls-resnet101.yaml
        │   │   │   ├── yolov8-cls-resnet50.yaml
        │   │   │   ├── yolov8-cls.yaml
        │   │   │   ├── yolov8-ghost-p2.yaml
        │   │   │   ├── yolov8-ghost-p6.yaml
        │   │   │   ├── yolov8-ghost.yaml
        │   │   │   ├── yolov8-obb.yaml
        │   │   │   ├── yolov8-p2.yaml
        │   │   │   ├── yolov8-p6.yaml
        │   │   │   ├── yolov8-pose-p6.yaml
        │   │   │   ├── yolov8-pose.yaml
        │   │   │   ├── yolov8-rtdetr.yaml
        │   │   │   ├── yolov8-seg-p6.yaml
        │   │   │   ├── yolov8-seg.yaml
        │   │   │   ├── yolov8-worldv2.yaml
        │   │   │   ├── yolov8-world.yaml
        │   │   │   └── yolov8.yaml
        │   │   └── v9
        │   │       ├── yolov9c-seg.yaml
        │   │       ├── yolov9c.yaml
        │   │       ├── yolov9e-seg.yaml
        │   │       ├── yolov9e.yaml
        │   │       ├── yolov9m.yaml
        │   │       ├── yolov9s.yaml
        │   │       └── yolov9t.yaml
        │   └── trackers
        │       ├── botsort.yaml
        │       └── bytetrack.yaml
        ├── data
        │   ├── annotator.py
        │   ├── augment.py
        │   ├── base.py
        │   ├── build.py
        │   ├── converter.py
        │   ├── dataset.py
        │   ├── explorer
        │   │   ├── explorer.py
        │   │   ├── gui
        │   │   │   ├── dash.py
        │   │   │   └── __init__.py
        │   │   ├── __init__.py
        │   │   └── utils.py
        │   ├── __init__.py
        │   ├── loaders.py
        │   ├── scripts
        │   │   ├── download_weights.sh
        │   │   ├── get_coco128.sh
        │   │   ├── get_coco.sh
        │   │   └── get_imagenet.sh
        │   ├── split_dota.py
        │   └── utils.py
        ├── engine
        │   ├── exporter.py
        │   ├── __init__.py
        │   ├── model.py
        │   ├── predictor.py
        │   ├── results.py
        │   ├── trainer.py
        │   ├── tuner.py
        │   └── validator.py
        ├── hub
        │   ├── auth.py
        │   ├── google
        │   │   └── __init__.py
        │   ├── __init__.py
        │   ├── session.py
        │   └── utils.py
        ├── __init__.py
        ├── models
        │   ├── fastsam
        │   │   ├── __init__.py
        │   │   ├── model.py
        │   │   ├── predict.py
        │   │   ├── utils.py
        │   │   └── val.py
        │   ├── __init__.py
        │   ├── nas
        │   │   ├── __init__.py
        │   │   ├── model.py
        │   │   ├── predict.py
        │   │   └── val.py
        │   ├── rtdetr
        │   │   ├── __init__.py
        │   │   ├── model.py
        │   │   ├── predict.py
        │   │   ├── train.py
        │   │   └── val.py
        │   ├── sam
        │   │   ├── amg.py
        │   │   ├── build.py
        │   │   ├── __init__.py
        │   │   ├── model.py
        │   │   ├── modules
        │   │   │   ├── blocks.py
        │   │   │   ├── decoders.py
        │   │   │   ├── encoders.py
        │   │   │   ├── __init__.py
        │   │   │   ├── memory_attention.py
        │   │   │   ├── sam.py
        │   │   │   ├── tiny_encoder.py
        │   │   │   ├── transformer.py
        │   │   │   └── utils.py
        │   │   └── predict.py
        │   ├── utils
        │   │   ├── __init__.py
        │   │   ├── loss.py
        │   │   └── ops.py
        │   └── yolo
        │       ├── classify
        │       │   ├── __init__.py
        │       │   ├── predict.py
        │       │   ├── train.py
        │       │   └── val.py
        │       ├── detect
        │       │   ├── __init__.py
        │       │   ├── predict.py
        │       │   ├── train.py
        │       │   └── val.py
        │       ├── __init__.py
        │       ├── model.py
        │       ├── obb
        │       │   ├── __init__.py
        │       │   ├── predict.py
        │       │   ├── train.py
        │       │   └── val.py
        │       ├── pose
        │       │   ├── __init__.py
        │       │   ├── predict.py
        │       │   ├── train.py
        │       │   └── val.py
        │       ├── segment
        │       │   ├── __init__.py
        │       │   ├── predict.py
        │       │   ├── train.py
        │       │   └── val.py
        │       └── world
        │           ├── __init__.py
        │           ├── train.py
        │           └── train_world.py
        ├── nn
        │   ├── autobackend.py
        │   ├── __init__.py
        │   ├── modules
        │   │   ├── activation.py
        │   │   ├── block.py
        │   │   ├── conv.py
        │   │   ├── head.py
        │   │   ├── __init__.py
        │   │   ├── transformer.py
        │   │   └── utils.py
        │   └── tasks.py
        ├── solutions
        │   ├── ai_gym.py
        │   ├── analytics.py
        │   ├── distance_calculation.py
        │   ├── heatmap.py
        │   ├── __init__.py
        │   ├── object_counter.py
        │   ├── parking_management.py
        │   ├── queue_management.py
        │   ├── speed_estimation.py
        │   └── streamlit_inference.py
        ├── trackers
        │   ├── basetrack.py
        │   ├── bot_sort.py
        │   ├── byte_tracker.py
        │   ├── __init__.py
        │   ├── README.md
        │   ├── track.py
        │   └── utils
        │       ├── gmc.py
        │       ├── __init__.py
        │       ├── kalman_filter.py
        │       └── matching.py
        └── utils
            ├── autobatch.py
            ├── benchmarks.py
            ├── callbacks
            │   ├── base.py
            │   ├── clearml.py
            │   ├── comet.py
            │   ├── dvc.py
            │   ├── hub.py
            │   ├── __init__.py
            │   ├── mlflow.py
            │   ├── neptune.py
            │   ├── raytune.py
            │   ├── tensorboard.py
            │   └── wb.py
            ├── checks.py
            ├── dist.py
            ├── downloads.py
            ├── errors.py
            ├── files.py
            ├── __init__.py
            ├── instance.py
            ├── loss.py
            ├── metrics.py
            ├── ops.py
            ├── patches.py
            ├── plotting.py
            ├── tal.py
            ├── torch_utils.py
            ├── triton.py
            └── tuner.py
```
