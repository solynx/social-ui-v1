<template>
  <div>
    <input
      ref="input"
      type="file"
      name="image"
      accept="image/*"
      @change="setImage"
    />

    <div class="content">
      <section class="cropper-area">
        <div class="img-cropper" v-show="imgSrc">
          <vue-cropper
            ref="cropper"
            :aspect-ratio="16 / 9"
            :src="imgSrc"
            preview=".preview"
          />
        </div>
        <div class="actions flex align-center">
          <NButton
            type="success"
            role="button"
            @click.prevent="showFileChooser"
          >
            Chọn hình ảnh
          </NButton>
          <NButton
            v-show="imgSrc"
            class="mx-3"
            type="warning"
            role="button"
            @click.prevent="reset"
          >
            Về ban đầu
          </NButton>
        
          <NButton
            v-show="imgSrc"
            type="Success"
            role="button"
            @click.prevent="cropImage"
          >
            OK
          </NButton>
        </div>
      </section>
      <section class="preview-area" v-show="imgSrc">
        <p>Xem trước</p>
        <div class="preview" />
        <p>Ảnh đã chỉnh sửa</p>
        <div class="cropped-image">
          <NImage
            v-if="cropImg"
            :src="cropImg"
            alt="Cropped Image"
          />
          <div v-else class="crop-placeholder" />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {  reactive, onMounted } from 'vue';
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';


const props = defineProps(["imgCrop"]);
const cropImg = ref(props.imgCrop)
const imgSrc = ref<string>('');
const data = ref<string | null>(null);
const cropper = ref<VueCropper>();
const input = ref<HTMLInputElement>();

const cropImage = () => {
  if (cropper.value) {
    cropImg.value = cropper.value.getCroppedCanvas().toDataURL();
    props.imgCrop.value =   cropper.value.getCroppedCanvas();
  }
};

const flipX = () => {
  const dom = input.value;
  if (dom) {
    let scale = parseInt(dom.getAttribute('data-scale') || '-1', 10);
    scale = -scale;
    if (cropper.value) {
      cropper.value.scaleX(scale);
    }
    dom.setAttribute('data-scale', scale.toString());
  }
};

const flipY = () => {
  const dom = input.value;
  if (dom) {
    let scale = parseInt(dom.getAttribute('data-scale') || '-1', 10);
    scale = -scale;
    if (cropper.value) {
      cropper.value.scaleY(scale);
    }
    dom.setAttribute('data-scale', scale.toString());
  }
};

const getCropBoxData = () => {
  if (cropper.value) {
    data.value = JSON.stringify(cropper.value.getCropBoxData(), null, 4);
  }
};

const getData = () => {
  if (cropper.value) {
    data.value = JSON.stringify(cropper.value.getData(), null, 4);
  }
};

const move = (offsetX: number, offsetY: number) => {
  if (cropper.value) {
    cropper.value.move(offsetX, offsetY);
  }
};

const reset = () => {
  if (cropper.value) {
    cropper.value.reset();
  }
};

const rotate = (deg: number) => {
  if (cropper.value) {
    cropper.value.rotate(deg);
  }
};

const setCropBoxData = () => {
  if (cropper.value && data.value) {
    cropper.value.setCropBoxData(JSON.parse(data.value));
  }
};

const setData = () => {
  if (cropper.value && data.value) {
    cropper.value.setData(JSON.parse(data.value));
  }
};

const setImage = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files ? target.files[0] : null;
  if (file && file.type.indexOf('image/') !== -1) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      imgSrc.value = result;
      if (cropper.value) {
        cropper.value.replace(result);
      }
    };
    reader.readAsDataURL(file);
  } else {
    alert('Please select an image file');
  }
};

const showFileChooser = () => {
  input.value?.click();
};

const zoom = (percent: number) => {
  if (cropper.value) {
    cropper.value.zoom(percent);
  }
};
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  width: 1024px;
  margin: 0 auto;
}

input[type="file"] {
  display: none;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 5px 0;
}

.header h2 {
  margin: 0;
}

.header a {
  text-decoration: none;
  color: black;
}

.content {
  display: flex;
  justify-content: space-between;
}

.cropper-area {
  width: 614px;
}

.actions {
  margin-top: 1rem;
}

.actions a {
  display: inline-block;
  padding: 5px 15px;
  background: #0062CC;
  color: white;
  text-decoration: none;
  border-radius: 3px;
  margin-right: 1rem;
  margin-bottom: 1rem;
}

textarea {
  width: 100%;
  height: 100px;
}

.preview-area {
  width: 307px;
}

.preview-area p {
  font-size: 1.25rem;
  margin: 0;
  margin-bottom: 1rem;
}

.preview-area p:last-of-type {
  margin-top: 1rem;
}

.preview {
  width: 100%;
  height: calc(372px * (9 / 16));
  overflow: hidden;
}

.crop-placeholder {
  width: 100%;
  height: 200px;
  background: #ccc;
}

.cropped-image img {
  max-width: 100%;
}
</style>
