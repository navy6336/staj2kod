-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Anamakine: 127.0.0.1
-- Üretim Zamanı: 25 Eyl 2020, 13:04:32
-- Sunucu sürümü: 10.4.13-MariaDB
-- PHP Sürümü: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `test`
--

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `doktorbilgileri`
--

CREATE TABLE `doktorbilgileri` (
  `id` int(10) NOT NULL,
  `tc` bigint(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `ad` varchar(255) NOT NULL,
  `soyad` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Tablo döküm verisi `doktorbilgileri`
--

INSERT INTO `doktorbilgileri` (`id`, `tc`, `password`, `ad`, `soyad`) VALUES
(7, 11111111111, '00', 'AHMET HUSREV', 'BULUT'),
(8, 66457012652, '11', 'OZAN', 'SAHIN');

-- --------------------------------------------------------

--
-- Tablo için tablo yapısı `hastabilgileri`
--

CREATE TABLE `hastabilgileri` (
  `id` int(11) NOT NULL,
  `tc` bigint(11) NOT NULL,
  `ad` varchar(250) NOT NULL,
  `soyad` varchar(50) NOT NULL,
  `telefon` bigint(10) NOT NULL,
  `adres` varchar(255) NOT NULL,
  `doktorid` int(11) NOT NULL,
  `tanı` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Tablo döküm verisi `hastabilgileri`
--

INSERT INTO `hastabilgileri` (`id`, `tc`, `ad`, `soyad`, `telefon`, `adres`, `doktorid`, `tanı`) VALUES
(27, 22222222222, 'AHMET HUSREV', 'BULUT', 5414111111, 'BURSA', 7, 'COVID'),
(28, 33333333333, 'AHMET HUSREV', 'BULUT', 5468052020, 'BURSA', 7, 'GRIP'),
(29, 12345678911, 'NAMIK', 'YILDIZ', 5462013030, 'BURSA', 7, 'COVID'),
(30, 44444444444, 'MEHMET', 'YILMAZ', 5468059090, 'ELAZIG', 7, 'SOGUK ALGINLIGI'),
(31, 88888888888, 'AHMET', 'MEHMET', 5065066666, 'BURSA', 8, 'COVID');

--
-- Dökümü yapılmış tablolar için indeksler
--

--
-- Tablo için indeksler `doktorbilgileri`
--
ALTER TABLE `doktorbilgileri`
  ADD PRIMARY KEY (`id`);

--
-- Tablo için indeksler `hastabilgileri`
--
ALTER TABLE `hastabilgileri`
  ADD PRIMARY KEY (`id`);

--
-- Dökümü yapılmış tablolar için AUTO_INCREMENT değeri
--

--
-- Tablo için AUTO_INCREMENT değeri `doktorbilgileri`
--
ALTER TABLE `doktorbilgileri`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Tablo için AUTO_INCREMENT değeri `hastabilgileri`
--
ALTER TABLE `hastabilgileri`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
