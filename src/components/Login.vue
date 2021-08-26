<script setup lang="ts">
import { ref, reactive } from 'vue';
import md5 from 'md5';
import { useRouter } from 'vue-router';
import useStoreHooks from '../hooks';

const router = useRouter();

const { dispatch } = useStoreHooks();

const form: any = ref(null);
let loginForm = reactive<{ username: string; password: string }>({ username: '', password: '' });

const rules = {
  username: [{ required: true, message: '请输入用户名' }],
  password: [{ required: true, message: '请输入密码' }],
};

const submitForm = () => {
  form.value.validate(async (valid: boolean) => {
    if (valid) {
      const { username, password } = loginForm;
      await dispatch('common/getToken', { username, password: md5(password) });
      router.push({ path: '/' });
    }
  });
};
</script>

<template>
  <div class="login-page">
    <div class="login-title">反侦测作业平台</div>
    <el-form
      class="login-wrapper"
      :model="loginForm"
      status-icon
      :rules="rules"
      :label-width="80"
      ref="form"
      label-suffix="："
    >
      <el-form-item label="用户名" prop="username">
        <el-input type="username" v-model="loginForm.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 70px 0;
  height: auto;
  min-height: 100vh;
  .login-title {
    font-size: 20px;
    font-weight: 500;
    line-height: 60px;
  }
}
</style>
