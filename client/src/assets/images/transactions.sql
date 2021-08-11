-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 08 Agu 2021 pada 21.34
-- Versi server: 10.4.18-MariaDB
-- Versi PHP: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `final`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `orderId` int(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `postCode` int(11) NOT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `transactions`
--

INSERT INTO `transactions` (`id`, `user_id`, `orderId`, `name`, `email`, `phone`, `address`, `status`, `postCode`, `attachment`, `createdAt`, `updatedAt`) VALUES
(334, 8, 0, 'Mohamad alfian', 'alfian1@gmail.com', NULL, 'By pass Tulungagung kecamatan kertasemaya rt 21 rw 05 no 98', 'Waiting Approve', 45274, '1628371853358-WhatsAppImage2021-06-03at10.29.23.jpeg', '2021-08-07 21:30:53', '2021-08-07 21:30:53'),
(335, 8, 0, 'Mohamad alfian', 'alfian1@gmail.com', NULL, 'By pass Tulungagung kecamatan kertasemaya rt 21 rw 05 no 98', 'Waiting Approve', 45274, '1628371908389-WhatsAppImage2021-06-03at10.29.23.jpeg', '2021-08-07 21:31:48', '2021-08-07 21:31:48'),
(336, 8, 461, 'Mohamad alfian', 'alfian1@gmail.com', NULL, 'By pass Tulungagung kecamatan kertasemaya rt 21 rw 05 no 98', 'Waiting Approve', 45274, '1628439953163-WhatsAppImage2021-06-03at10.29.23.jpeg', '2021-08-08 16:25:53', '2021-08-08 16:25:53'),
(337, 8, 0, 'Mohamad alfian', 'alfian1@gmail.com', NULL, 'By pass Tulungagung kecamatan kertasemaya rt 21 rw 05 no 98', 'Waiting Approve', 45274, '1628450984018-WhatsAppImage2021-06-03at10.29.23.jpeg', '2021-08-08 19:29:44', '2021-08-08 19:29:44');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=338;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
