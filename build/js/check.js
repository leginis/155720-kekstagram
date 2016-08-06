function getMessage(a, b) {
  if (typeof a == 'boolean') {
    return describeGif(a, b)
  }
  if (typeof a == 'number') {
    return describeSVG(a, b)
  }
  if (typeof a == 'object' && typeof b != 'object') {
    return describePNG(a)
  }
  if (typeof a == 'object' && typeof b == 'object') {
    return describeJPEG(a, b)
  }
}

function describeGif(isAnimated, framesCount) {
  if (isAnimated) {
    return 'Переданное GIF-изображение анимировано и содержит ' + framesCount + ' кадров'
  } else {
    return 'Переданное GIF-изображение не анимировано'
  }
}

function describeSVG(objectsCount, attributesCountDividedBy4) {
  return 'Переданное SVG-изображение содержит ' + objectsCount + ' объектов и ' + attributesCountDividedBy4 * 4 + ' атрибутов'
}

function describePNG(arrayOfRedPointsAmounts) {
  var amountOfRedPoints = 0;
  for (var i = 0; i < arrayOfRedPointsAmounts.length; i++) {
    amountOfRedPoints += arrayOfRedPointsAmounts[i];
  }
  return 'Количество красных точек во всех строчках изображения: ' + amountOfRedPoints
}

function describeJPEG(artifactsArray1, artifactsArray2) {
  var artifactsSquare = 0;
  for (var i = 0; i < artifactsArray1.length; i++) {
    artifactsSquare += artifactsArray1[i] * artifactsArray2[i];
  }
  return 'Общая площадь артефактов сжатия: ' + artifactsSquare + ' пикселей'
}
