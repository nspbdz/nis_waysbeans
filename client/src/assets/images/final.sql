-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 01 Agu 2021 pada 17.42
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
-- Struktur dari tabel `city`
--

CREATE TABLE `city` (
  `id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `houses_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `houses`
--

CREATE TABLE `houses` (
  `id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `typeRent` varchar(255) DEFAULT NULL,
  `amenities` varchar(255) DEFAULT NULL,
  `bedroom` int(11) DEFAULT NULL,
  `bathroom` int(11) DEFAULT NULL,
  `city_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `listas`
--

CREATE TABLE `listas` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `listas`
--

INSERT INTO `listas` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', '2021-07-29 07:31:18', '2021-07-29 07:31:18'),
(2, 'user', '2021-07-29 07:31:18', '2021-07-29 07:31:18');

-- --------------------------------------------------------

--
-- Struktur dari tabel `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `productsId` varchar(255) DEFAULT NULL,
  `transactionsId` int(11) NOT NULL,
  `orderQuantity` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `orders`
--

INSERT INTO `orders` (`id`, `productsId`, `transactionsId`, `orderQuantity`, `createdAt`, `updatedAt`) VALUES
(81, NULL, 0, '10', '2021-08-01 01:25:44', '2021-08-01 01:25:44'),
(82, NULL, 0, '10', '2021-08-01 01:26:15', '2021-08-01 01:26:15'),
(83, '13', 115, '20', '2021-08-01 01:26:44', '2021-08-01 01:26:44'),
(84, '2', 115, '10', '2021-08-01 01:27:27', '2021-08-01 01:27:27'),
(85, NULL, 0, '2', '2021-08-01 08:41:35', '2021-08-01 08:41:35');

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `stock`, `photo`, `createdAt`, `updatedAt`) VALUES
(2, 'robust', 10000, 'enak', 100, '1627537389803-kopi.jpg', '2021-07-29 05:43:09', '2021-07-29 05:43:09'),
(3, 'robust', 10000, 'enak', 100, '1627537405444-kopi.jpg', '2021-07-29 05:43:25', '2021-07-29 05:43:25'),
(11, 'kopi baru', 1231231, 'kopi baru enak', 123123, '1627543461870-kopi.jpg', '2021-07-29 07:24:21', '2021-07-29 07:24:21'),
(12, 'kopi jawa', 123123, 'kopi jawa enak', 123123, '1627568645924-kopi.jpg', '2021-07-29 14:24:05', '2021-07-29 14:24:05'),
(13, 'kopi barus', 1000, 'kopi enak', 100, '1627570408900-kopi.jpg', '2021-07-29 14:53:28', '2021-07-29 14:53:28');

-- --------------------------------------------------------

--
-- Struktur dari tabel `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data untuk tabel `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20210701022522-create-user.js'),
('20210703124026-create-city.js'),
('20210703153238-create-house.js'),
('20210705140945-create-list-as.js'),
('20210706062804-create-transaction.js'),
('20210728200113-create-product.js'),
('20210731120851-create-order.js');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `productId` varchar(255) NOT NULL,
  `orderId` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `attachment` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `transactions`
--

INSERT INTO `transactions` (`id`, `user_id`, `productId`, `orderId`, `name`, `email`, `phone`, `address`, `status`, `attachment`, `createdAt`, `updatedAt`) VALUES
(92, 2, '2,11,3', '', 'Mohamad alfian', 'alfian1@gmail.com', NULL, 'By pass Tulungagung kecamatan kertasemaya rt 21 rw 05 no 98', 'Waiting Approve', '1627778996353-WhatsAppImage2021-06-03at10.29.23.jpeg', '2021-08-01 00:49:56', '2021-08-01 00:49:56'),
(112, 1, '', '', 'alfian', 'alfian@gmail.com', NULL, 'jakpuss', NULL, '1627781144524-WhatsAppImage2021-06-03at10.29.23.jpeg', '2021-08-01 01:25:44', '2021-08-01 01:25:44'),
(113, 1, '', '', 'alfian', 'alfian@gmail.com', NULL, 'jakpuss', NULL, '1627781175715-WhatsAppImage2021-06-03at10.29.23.jpeg', '2021-08-01 01:26:15', '2021-08-01 01:26:15'),
(114, 1, '2,13', '', 'alfian', 'alfian@gmail.com', NULL, 'jakpuss', NULL, '1627781204233-WhatsAppImage2021-06-03at10.29.23.jpeg', '2021-08-01 01:26:44', '2021-08-01 01:26:44'),
(115, 1, '2,13', '84,83', 'alfian', 'alfian@gmail.com', NULL, 'jakpuss', NULL, '1627781247182-WhatsAppImage2021-06-03at10.29.23.jpeg', '2021-08-01 01:27:27', '2021-08-01 01:27:27'),
(116, 2, '2,11,3', '', 'Mohamad alfian', 'alfian1@gmail.com', NULL, 'By pass Tulungagung kecamatan kertasemaya rt 21 rw 05 no 98', 'Waiting Approve', '1627807295919-WhatsAppImage2021-06-03at10.29.23.jpeg', '2021-08-01 08:41:35', '2021-08-01 08:41:35');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `listasid` int(11) NOT NULL,
  `phone` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `fullname`, `email`, `password`, `image`, `listasid`, `phone`, `createdAt`, `updatedAt`) VALUES
(1, 'udins', 'alfianuser6@gmail.com', '$2b$10$kWOLXDsnS4G.xThOlH0WieSkQwz7OZExjkmbC8QkiStSlTG2mAwRS', '1627641203542-kopi.jpg', 2, 0, '2021-07-28 20:35:04', '2021-07-30 10:33:23'),
(2, 'udins', 'alfianuser1@gmail.com', '$2b$10$Gr6sZ5YSDC8xBCQh5A/C0OQys0duBirgoiMG4ZsfuFFnZ9Arht.a.', '1627813525851-Mark-Zuckerberg.jpg', 2, 0, '2021-07-28 20:35:28', '2021-08-01 10:25:25'),
(3, 'Mohamad alfian', 'alfianadmin@gmail.com', '$2b$10$9HEdwln9hM0.YvPD.UYIeOYXvJixkkax2EDPkdixVhQ40UKwMyKJK', NULL, 1, 0, '2021-07-28 22:40:09', '2021-07-28 22:40:09'),
(4, 'Mohamad alfian', 'alfianadmin2@gmail.com', '$2b$10$Rzw1jd4dX4m4iER/.7BPK.rc340A70njMJYGaZeI4nawBfsCMvtX2', NULL, 1, 0, '2021-07-28 22:43:27', '2021-07-28 22:43:27'),
(5, 'udins', 'alfianuser3@gmail.com', '$2b$10$3fOO142ybo7IAVSmQIZhGegMb9x/jtrVvFPyugwWc4N5psWcXi82S', '1627812218083-kopi.jpg', 2, 0, '2021-07-29 14:33:56', '2021-08-01 10:03:38'),
(6, 'alfianuser1', 'alfianuser12@gmail.com', '$2b$10$IkIsCt5PAvERnLkP9L4w6OZMdfjBeoLihd195IdvYNuUUmSJJitQ6', NULL, 2, 0, '2021-07-29 14:37:18', '2021-07-29 14:37:18'),
(7, 'Mohamad alfian', 'alfianuser31@gmail.com', '$2b$10$25BZh8pIb/TEzxI7mqfAIeifTIUwKe.pMsJOG07qQdRPkXVdMtv8S', NULL, 2, 0, '2021-07-29 14:49:03', '2021-07-29 14:49:03');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `listas`
--
ALTER TABLE `listas`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indeks untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `listas`
--
ALTER TABLE `listas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;

--
-- AUTO_INCREMENT untuk tabel `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT untuk tabel `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
