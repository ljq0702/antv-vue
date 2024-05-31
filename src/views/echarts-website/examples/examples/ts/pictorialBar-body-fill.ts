/*
title: Water Content
category: pictorialBar
titleCN: 人体含水量
*/

const symbols = [
  'path://M36.7,102.84c-1.17,2.54-2.99,4.98-3.39,7.63c-1.51,9.89-3.31,19.58-1.93,29.95 c0.95,7.15-2.91,14.82-3.57,22.35c-0.64,7.36-0.2,14.86,0.35,22.25c0.12,1.68,2.66,3.17,4.67,5.4c-0.6,0.82-1.5,2.22-2.58,3.48 c-0.96,1.12-1.96,2.35-3.21,3.04c-1.71,0.95-3.71,2.03-5.51,1.9c-1.18-0.08-3.04-2.13-3.16-3.43c-0.44-4.72,0-9.52-0.41-14.25 c-0.94-10.88-2.32-21.72-3.24-32.61c-0.49-5.84-1.63-12.01-0.35-17.54c3.39-14.56,2.8-28.84,0.36-43.4 c-2.71-16.16-1.06-32.4,0.54-48.59c0.91-9.22,4.62-17.36,8.53-25.57c1.32-2.77,1.88-6.84,0.87-9.62C21.89-3.77,18.09-11,14.7-18.38 c-0.56,0.1-1.13,0.21-1.69,0.31C10.17-11.52,6.29-5.2,4.71,1.65C2.05,13.21-4.42,22.3-11.43,31.28c-1.32,1.69-2.51,3.5-3.98,5.04 c-4.85,5.08-3.25,10.98-2.32,16.82c0.25,1.53,0.52,3.06,0.77,4.59c-0.53,0.22-1.07,0.43-1.6,0.65c-1.07-2.09-2.14-4.19-3.28-6.44 c-6.39,2.91-2.67,9.6-5.23,15.16c-1.61-3.31-2.77-5.68-3.93-8.06c0-0.33,0-0.67,0-1c6.96-16.08,14.63-31.9,20.68-48.31 C-5.24-4.07-2.03-18.55,2-32.73c0.36-1.27,0.75-2.53,0.98-3.82c1.36-7.75,4.19-10.23,11.88-10.38c1.76-0.04,3.52-0.21,5.76-0.35 c-0.55-3.95-1.21-7.3-1.45-10.68c-0.61-8.67,0.77-16.69,7.39-23.19c2.18-2.14,4.27-4.82,5.25-7.65c2.39-6.88,11.66-9,16.94-8.12 c5.92,0.99,12.15,7.93,12.16,14.12c0.01,9.89-5.19,17.26-12.24,23.68c-2.17,1.97-5.35,4.77-5.17,6.94c0.31,3.78,4.15,5.66,8.08,6.04 c1.82,0.18,3.7,0.37,5.49,0.1c5.62-0.85,8.8,2.17,10.85,6.73C73.38-27.19,78.46-14.9,84.2-2.91c1.52,3.17,4.52,5.91,7.41,8.09 c7.64,5.77,15.57,11.16,23.45,16.61c2.28,1.58,4.64,3.23,7.21,4.14c5.18,1.84,8.09,5.63,9.82,10.46c0.45,1.24,0.19,3.71-0.6,4.18 c-1.06,0.63-3.15,0.27-4.44-0.38c-7.05-3.54-12.84-8.88-19.14-13.5c-3.5-2.57-7.9-4-12.03-5.6c-9.44-3.66-17.73-8.42-22.5-18.09 c-2.43-4.94-6.09-9.27-9.69-14.61c-1.2,10.98-4.46,20.65,1.14,31.19c6.62,12.47,5.89,26.25,1.21,39.49 c-2.52,7.11-6.5,13.74-8.67,20.94c-1.91,6.33-2.2,13.15-3.23,19.75c-0.72,4.63-0.84,9.48-2.36,13.84 c-2.49,7.16-6.67,13.83-5.84,21.82c0.42,4.02,1.29,7.99,2.1,12.8c-3.74-0.49-7.47-0.4-10.67-1.66c-1.33-0.53-2.43-4.11-2.07-6.01 c1.86-9.94,3.89-19.69,0.07-29.74C34.55,108.63,36.19,105.52,36.7,102.84c1.25-8.45,2.51-16.89,3.71-24.9 c-0.83-0.58-0.85-0.59-0.87-0.61c-0.03,0.16-0.07,0.32-0.09,0.48C38.53,86.15,37.62,94.5,36.7,102.84z',
  'path://M40.02-99c2.07,1.21,4.26,2.25,6.19,3.66c5.94,4.34,8.23,12.57,4.95,19.79 c-3.21,7.08-6.82,14.03-10.86,20.67c-2.17,3.56-1.25,5.38,1.99,6.36c2.94,0.89,6.36,1.91,9.15,1.21c5.51-1.4,8.33,1.23,10.66,5.29 c4.71,8.22,9.72,16.29,13.84,24.8C81.06-6.65,89,0.4,99.56,5.17C109.82,9.8,120,14.7,129.85,20.15c4.72,2.61,9.09,6.37,10.24,12.97 c-2.89-1.93-5.2-3.75-7.78-5.04c-0.99-0.5-2.6,0.22-4.83,0.5c-5.36-9.35-16.8-9.4-26.74-12.62C91.68,13.04,81.82,11.37,75.66,3 c-5.98-8.13-11.61-16.52-17.4-24.79c-0.46-0.66-0.98-1.27-1.66-2.16c-3.21,7.75-6.78,15-9.12,22.63c-1.15,3.76-0.64,8.37,0.26,12.33 c0.81,3.59,3.01,6.92,4.87,10.22c6.73,11.95,2.41,22.89-2.91,33.75c-0.35,0.72-0.86,1.43-1.46,1.97 c-7.11,6.38-14.48,12.5-21.24,19.22c-2.08,2.07-3.1,5.7-3.62,8.77c-1.92,11.44-3.81,22.92-4.93,34.46 c-0.5,5.16,1.06,10.49,1.28,15.75c0.23,5.7,0.39,11.47-0.15,17.13c-1.15,12.11-2.83,24.17-4.11,36.27c-0.18,1.72,0.8,3.53,1.13,5.33 c0.88,4.76-0.22,6.23-4.71,5.17c-4.53-1.06-8.86-2.94-14.27-4.8c1.98-1.62,2.84-2.83,3.94-3.12c5.42-1.44,7-5.2,6.39-10.23 c-1.39-11.39-3.15-22.73-4.24-34.14c-0.53-5.56,0.16-11.23,0.24-16.85c0.06-4.49,0.01-8.97,0.01-14.72 c-2.79,1.53-5.2,2.27-6.79,3.83c-4.26,4.19-8.39,8.56-12.11,13.22c-1.55,1.95-2.19,4.76-2.79,7.29c-0.47,1.99,0.6,5.02-0.48,6.05 c-2.17,2.08-5.2,3.79-8.13,4.38c-3.61,0.73-7.49,0.18-12.26,0.18c6.34-8.69,11.91-16.11,17.22-23.71c3.29-4.71,6.23-9.67,9.24-14.58 c2.15-3.5,3.76-7.4,6.3-10.57c5.38-6.73,6.74-14.28,6.72-22.64C0.88,68.3,1.36,57.91,2.26,47.58c0.69-7.85,2.15-15.67,3.7-23.41 c0.77-3.83,2.89-7.39,3.72-11.22c1.83-8.4-1.9-16-4.38-23.95C2.96-5.34-0.31,0.12-1.5,6c-1.96,9.72-7.34,17.44-12.26,25.57 c-4.39,7.25-8.79,14.52-12.75,22.01c-2.64,5-4.5,10.41-6.83,15.92c-4.82-5.28-4.65-10.59-0.94-16.97 C-21.4,30.4-12.08,6.78-6.17-18.12c1.4-5.88,1.24-12.11,2.23-18.12c1.2-7.27,4.15-9.56,11.39-9.69c8.65-0.14,13.86-4.77,14.48-13.51 c0.35-5.01,0.16-10.11-0.28-15.12c-0.82-9.3,2.49-16.57,10.17-21.69c2.08-1.39,4.78-1.87,7.2-2.76C39.35-99,39.69-99,40.02-99z',
  'path://M-39,33.03c3.72-9.74,12.97-12.87,20.96-17.43c9.51-5.43,19.2-10.54,28.69-16 c1.77-1.02,3.35-2.85,4.33-4.67C21.44-17,27.82-28.95,33.95-41.04c2.13-4.2,4.95-6.01,9.7-6.09c3.68-0.06,7.52-0.92,10.97-2.25 c5.09-1.95,4.85-5.2,1.1-9.01c-5.12-5.21-10.89-10.1-13.23-17.54c-1.71-5.44,0.78-15.62,4.87-18.74 c4.12-3.15,12.55-3.84,16.69-0.12c3.39,3.04,6.44,7.27,7.8,11.56c1.96,6.16,3.31,12.9,2.99,19.29 c-0.45,9.21,6.35,16.71,15.73,16.97c7.94,0.21,9.27,0.78,10.69,8.61c5.23,28.73,19.4,53.73,32.21,79.33 c1.95,3.9,4.32,7.71,5.51,11.84c1.03,3.61,0.66,7.61,0.91,11.45c-0.73,0.14-1.45,0.28-2.18,0.42c-0.49-1.57-0.98-3.15-1.47-4.72 c-0.22,0.09-0.44,0.19-0.66,0.28c-0.85-2.62-1.7-5.24-2.74-8.45c-0.9,2.53-1.55,4.4-2.21,6.26c-0.41-0.03-0.83-0.06-1.24-0.08 c-0.19-2.78-0.35-5.56-0.56-8.34c-0.67-9.04-7.05-14.8-12.04-21.47c-5.2-6.95-10.31-14.09-14.36-21.73 c-3.56-6.7-5.59-14.21-9-21.29c-3.02,9.7-8.69,18.66-6.3,29.2c0.63,2.78,2.68,5.21,3.87,7.9c4.73,10.64,5.56,22.14,6.92,33.46 c1.21,10.13,1.88,20.38,1.96,30.59c0.06,7.02-1.67,14.04-1.85,21.08c-0.12,4.66,0.83,9.41,1.73,14.03 c1.21,6.22,2.81,12.36,4.28,18.52c0.3,1.26,0.69,2.51,1.23,3.69c3.92,8.54,7.79,17.1,11.88,25.55c1.3,2.67,3.24,5.04,5.07,7.83 c-2.19,0.86-3.64,1.76-5.17,1.97c-3.53,0.47-6.9,0.64-8.13-4.11c-1.71-6.58-3.78-13.07-5.87-19.54c-0.44-1.35-1.6-2.47-3.21-3.33 c0,16.17-7.35,32.86,6.17,48.11c-3.55,0-5.95,0.01-8.36,0c-7.59-0.03-7.66-0.54-7.72-7.64c-0.11-13.74-0.69-27.4-5.27-40.71 c-1.72-5.01-0.38-11.01-1.01-16.49c-0.67-5.79-2.11-11.48-3.08-17.24c-2.52-14.91-12.01-26.06-20.01-38.12 c-5.34-8.06-10.18-16.56-14.25-25.32c-5.18-11.16-5.52-22.61,1.24-33.57c3.68-5.96,3.12-12.27,1.17-18.55 c-2.5-8.03-5.22-16-8.05-24.61c-0.91,1.44-1.76,2.86-2.68,4.24C32.9-10.29,28.04-2.46,22.63,4.96c-5.34,7.34-14.22,8.45-22.08,10.9 c-8.48,2.65-17.2,4.46-23.03,12.01c-1.84,2.39-3.61,4.84-5.41,7.26c-0.39-0.17-0.78-0.34-1.16-0.51c0.81-2.38,1.62-4.76,2.43-7.14 c-0.2-0.22-0.39-0.44-0.59-0.66c-1.24,1.3-2.31,2.88-3.77,3.83c-2.54,1.66-5.33,2.94-8.02,4.37C-39,34.36-39,33.7-39,33.03z',
  'path://M80,100.49c0,5.23,0.13,10.46-0.03,15.69c-0.2,6.3-0.57,12.6-0.99,18.9 c-0.94,14.08-2.08,28.14-2.87,42.22c-0.41,7.29,4.95,14.31,12.03,16.62c1.22,0.4,2.43,0.84,3.65,2.16c-1.8,0.35-3.59,0.91-5.4,1 c-5.4,0.3-10.83,0.7-16.22,0.42c-1.44-0.07-3.7-2.25-3.95-3.74c-0.56-3.4,0.14-6.98-0.13-10.45c-0.77-9.67-0.8-19.56-3-28.92 c-1.97-8.39-2.18-16.07-0.02-24.35c1.28-4.91,1.34-10.48,0.5-15.52c-2.09-12.71-4.95-25.31-7.65-37.92 c-0.34-1.57-1.3-3.33-2.52-4.33c-3.71-3.01-7.37-6.38-11.62-8.38c-13.61-6.41-19.23-28.93-9.14-42.66 c5.41-7.36,5.32-13.85,0.74-21.4c-4.33-7.14-7.8-14.79-11.71-22.32C16.35-14.03,11.08-4.82,4.94,3.76 C1.8,8.13-2.43,12.19-7.04,14.93c-5.3,3.15-11.39,5.39-17.43,6.76c-9.05,2.05-14.31,7.59-17.67,15.68 c-0.43,1.05-1.13,1.99-1.76,2.95c-0.15,0.22-0.52,0.29-1.8,0.94c0.32-2.2,0.61-3.74,0.74-5.3c0.09-1.14-0.04-2.3-0.07-3.46 c-1.38,0.26-3.21,0.05-4.06,0.86c-2,1.91-3.5,4.33-5.27,6.49c-0.5,0.61-1.22,1.03-1.95,1.61c-1.02-5.19,1.42-10.27,7.11-13.9 C-36.09,19.24-22.82,11.2-9.77,2.82c2.12-1.36,3.99-3.6,5.17-5.85C1.52-14.72,7.44-26.52,13.29-38.35 c2.21-4.48,5.11-7.27,10.48-7.83c3.23-0.34,6.27-2.47,9.89-4.01c-4.23-4.83-8.31-8.74-11.49-13.28c-6.34-9.03-7.03-22.38,3.14-29.92 c6.9-5.12,13.79-4.47,20.85,0.69c6.15,4.5,6.15,11.2,7.55,17.13c1.32,5.6,0.82,11.84,0.1,17.67c-0.73,5.9-0.29,7.53,5.3,8.73 c0.96,0.21,1.99,0.17,2.98,0.19C72.51-48.76,74.44-47.06,76-36.52c1.83,12.35,2.1,25.03,6.99,36.77 c3.28,7.88,6.57,15.79,10.47,23.38c3.66,7.12,8.05,13.87,12.25,20.7c2.97,4.84,3.11,12.13-0.65,17c-1.8-2.05-3.45-3.92-5.01-5.7 c0.04-0.04-0.45,0.53-1.46,1.71C94.83,37.86,80.48,24.72,71.82,8.18c0.46,3.43,0.09,7.26,1.54,10.2c3.95,8.01,1.92,16.67,3.56,24.91 c1.63,8.22,1.87,16.74,3.79,24.88c0.88,3.73,4.32,6.84,6.58,10.25c1.09,1.65,2.2,3.29,3.17,5.01c4.84,8.58,9.09,17.55,14.58,25.69 c7.27,10.79,15.21,21.16,23.39,31.28c6.19,7.67,13.08,14.8,19.92,21.92c2.93,3.04,6.54,5.42,9.96,8.2 c-6.92,4.09-12.67,3.33-19.87-2.17c-1.82-1.39-3.76-2.79-5.87-3.62c-4.12-1.63-4.47-4.54-3.73-8.3c0.26-1.33,0.17-3.42-0.66-4.18 c-7.53-6.87-14.85-14.07-23.04-20.07c-7.75-5.68-12.26-13.2-16.11-21.54c-1.44-3.12-3.31-6.06-5.14-8.98 c-0.5-0.8-1.57-1.24-2.38-1.85C81.01,100.03,80.5,100.26,80,100.49z',
  'path://M-57,41.03c3.65-4.15,7.17-8.43,10.98-12.42c6.53-6.83,13.31-13.41,19.84-20.23 c1.76-1.84,3.51-3.98,4.4-6.31c3.8-9.99,6.99-20.23,10.99-30.14c2.74-6.79,5.65-13.62,12.37-17.95c4.17-2.68,5.12-7.31,4.29-11.96 c-0.3-1.67-2.02-3.08-3.35-4.97c-2.57,5.59-4.62,10.03-7.21,15.66c-4.79-6.43-9.76-10.83-11.68-16.31 c-1.77-5.04-1.18-11.44,0.04-16.86c1.27-5.62,5.24-9.71,12.03-9.7c1.55,0,3.1-1.68,4.66-2.55c9.3-5.22,20.47-1.53,25.73,7.59 c4.06,7.04,4.84,14.6,5.57,22.26c0.65,6.82-0.32,7.59-8.26,8.11c0,1.97,0,3.96,0,5.95c8.01-0.17,8.01,0.43,12.02,7.52 c2.09,3.69,6.34,6.1,9.41,9.29c2.48,2.58,7.04,3.14,7.24,8c0.29,6.79,0.46,6.78-6.43,11.08c0,15.78-0.02,31.49,0.03,47.2 c0,1.23,0.29,2.51,0.71,3.67c1.64,4.59,3.27,9.19,5.13,13.7c0.79,1.92,1.88,3.83,3.26,5.36c7.54,8.36,15.45,16.41,22.75,24.96 c5.09,5.97,9.05,12.9,14.18,18.84c9.73,11.26,19.47,22.59,30.08,33c8.84,8.67,18.88,16.13,28.51,23.98 c2.52,2.06,5.48,3.58,8.27,5.36c-4.02,3.54-10.94,4.01-16.34,1.62c-4.76-2.11-9.63-4.03-14.6-5.56c-5.6-1.72-6.59-3.72-4.42-9.32 c0.47-1.22-0.12-3.8-1.11-4.5c-7.36-5.15-14.66-10.53-22.55-14.78c-8.49-4.57-15.35-10.3-19.59-19.04 c-4.29-8.84-11.6-14.85-19.48-20.29c-3.2-2.21-6.43-4.4-9.64-6.6c-0.53,0.17-1.05,0.33-1.58,0.5c-0.11,11.17,0.12,22.36-0.45,33.51 c-0.29,5.72-2.33,11.33-3,17.05c-1.68,14.31-3.04,28.65-4.51,42.98c-0.34,3.34,0.94,5.76,4.12,7.18c6.09,2.73,12.14,5.56,18.61,9.26 c-3.96,0.36-7.93,0.72-11.89,1.08c-4.92,0.45-9.91,0.53-14.76,1.42c-6.96,1.28-9.68-0.99-8.69-8.02c1.73-12.28,0.67-24.36-1.4-36.56 c-1.08-6.36-2.02-14.02,0.49-19.47c5.62-12.19,2.4-23.48,0.01-35.2c-2.05-10.04-3.8-20.14-5.9-30.17c-0.32-1.52-1.72-2.91-2.87-4.13 c-3.6-3.83-8.03-7.09-10.85-11.41c-6.61-10.14-2.6-19.6,3.74-28.13c5.27-7.1,6.85-14.1,2.15-21.95c-3.79-6.34-7.53-12.7-11.38-19 c-0.46-0.75-1.41-1.2-2.77-2.3c-3.27,7.28-6.98,13.9-9.24,20.98c-3.58,11.2-12.11,17.05-21.53,22.3c-1.86,1.04-3.57,2.44-5.53,3.21 c-4.29,1.67-6.09,3.88-4.9,9.01c0.69,2.96-1.31,6.55-2.1,9.86c-0.5,0.03-0.99,0.06-1.49,0.08c-0.18-2.57-0.36-5.14-0.66-9.41 c-3.45,4.38-6.11,7.75-9.33,11.84c-1.07-2.08-1.61-3.13-2.15-4.18C-57,43.7-57,42.36-57,41.03z'
];

const bodyMax = 150;

const labelSetting: echarts.PictorialBarSeriesOption['label'] = {
  show: true,
  position: 'top',
  offset: [0, -20],
  formatter: function (param: any) {
    return ((param.value / bodyMax) * 100).toFixed(0) + '%';
  },
  fontSize: 18,
  fontFamily: 'Arial'
};

const markLineSetting: echarts.MarkLineComponentOption = {
  symbol: 'none',
  lineStyle: {
    opacity: 0.3
  },
  data: [
    {
      type: 'max',
      label: {
        formatter: 'max: {c}'
      }
    },
    {
      type: 'min',
      label: {
        formatter: 'min: {c}'
      }
    }
  ]
};

option = {
  tooltip: {},
  legend: {
    data: ['typeA', 'typeB'],
    selectedMode: 'single'
  },
  xAxis: {
    data: ['a', 'b', 'c', 'd', 'e'],
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: { show: false }
  },
  yAxis: {
    max: bodyMax,
    offset: 20,
    splitLine: { show: false }
  },
  grid: {
    top: 'center',
    height: 230
  },
  markLine: {
    z: -100
  },
  series: [
    {
      name: 'typeA',
      type: 'pictorialBar',
      symbolClip: true,
      symbolBoundingData: bodyMax,
      label: labelSetting,
      data: [
        {
          value: 123,
          symbol: symbols[0]
        },
        {
          value: 34,
          symbol: symbols[1]
        },
        {
          value: 101,
          symbol: symbols[2]
        },
        {
          value: 89,
          symbol: symbols[3]
        },
        {
          value: 72,
          symbol: symbols[4]
        }
      ],
      markLine: markLineSetting,
      z: 10
    },
    {
      name: 'typeB',
      type: 'pictorialBar',
      symbolClip: true,
      symbolBoundingData: bodyMax,
      label: labelSetting,
      data: [
        {
          value: 12,
          symbol: symbols[0]
        },
        {
          value: 44,
          symbol: symbols[1]
        },
        {
          value: 131,
          symbol: symbols[2]
        },
        {
          value: 33,
          symbol: symbols[3]
        },
        {
          value: 142,
          symbol: symbols[4]
        }
      ],
      markLine: markLineSetting,
      z: 10
    },
    {
      name: 'full',
      type: 'pictorialBar',
      symbolBoundingData: bodyMax,
      animationDuration: 0,
      itemStyle: {
        color: '#ccc'
      },
      data: [
        {
          value: 1,
          symbol: symbols[0]
        },
        {
          value: 1,
          symbol: symbols[1]
        },
        {
          value: 1,
          symbol: symbols[2]
        },
        {
          value: 1,
          symbol: symbols[3]
        },
        {
          value: 1,
          symbol: symbols[4]
        }
      ]
    }
  ]
};
export {};
