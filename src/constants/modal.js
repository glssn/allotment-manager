import { useState } from "react";

export const showModal = () => {
   setIsModalVisible(true);
 };

export const handleOk = () => {
   setIsModalVisible(false);
 };

export const handleCancel = () => {
   setIsModalVisible(false);
 };
