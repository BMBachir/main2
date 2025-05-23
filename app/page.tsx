import Link from "next/link";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  BookOpen,
  Award,
  Building,
  GraduationCap,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Badge className="mb-2">Plateforme Innovante</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  L'écosystème complet de la formation professionnelle
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connectez-vous à un réseau unique qui réunit entreprises,
                  écoles de formation, formateurs et consultants pour créer des
                  opportunités de collaboration et d'apprentissage.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/services/formations"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
                  >
                    Découvrir nos services
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/auth/register"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                  >
                    S'inscrire gratuitement
                  </Link>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="aspect-video overflow-hidden rounded-xl bg-gray-100 shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Plateforme de formation"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 border-y bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
                  500+
                </h3>
                <p className="text-sm md:text-base font-medium text-gray-500">
                  Formations disponibles
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
                  200+
                </h3>
                <p className="text-sm md:text-base font-medium text-gray-500">
                  Écoles partenaires
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
                  1000+
                </h3>
                <p className="text-sm md:text-base font-medium text-gray-500">
                  Formateurs experts
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
                  5000+
                </h3>
                <p className="text-sm md:text-base font-medium text-gray-500">
                  Entreprises utilisatrices
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <Badge className="mb-2">Nos Services</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Une solution pour chaque besoin
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Découvrez notre écosystème complet pour tous les acteurs de la
                  formation professionnelle
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
                <div className="rounded-full bg-blue-100 p-4 mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Formations</h3>
                <p className="text-gray-500 mb-4">
                  Accédez à un catalogue complet de formations professionnelles
                  de qualité, évaluées et certifiées.
                </p>
                <ul className="text-left space-y-2 mb-6 flex-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Formations certifiantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Évaluations transparentes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Contenus pédagogiques de qualité</span>
                  </li>
                </ul>
                <Link
                  href="/services/formations"
                  className="inline-flex items-center text-blue-600 hover:underline mt-auto"
                >
                  Voir les formations
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
                <div className="rounded-full bg-blue-100 p-4 mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Formateurs / Consultants
                </h3>
                <p className="text-gray-500 mb-4">
                  Trouvez les meilleurs experts pour vos besoins spécifiques ou
                  proposez vos services en tant que formateur.
                </p>
                <ul className="text-left space-y-2 mb-6 flex-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Profils vérifiés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Expertises spécialisées</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Mise en relation directe</span>
                  </li>
                </ul>
                <Link
                  href="/services/formateurs"
                  className="inline-flex items-center text-blue-600 hover:underline mt-auto"
                >
                  Découvrir les experts
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Card>
              <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
                <div className="rounded-full bg-blue-100 p-4 mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Formations sur mesure
                </h3>
                <p className="text-gray-500 mb-4">
                  Créez des programmes adaptés à vos besoins spécifiques et
                  confiez-nous vos projets de formation.
                </p>
                <ul className="text-left space-y-2 mb-6 flex-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Programmes personnalisés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Accompagnement dédié</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Suivi et évaluation</span>
                  </li>
                </ul>
                <Link
                  href="/services/sur-mesure"
                  className="inline-flex items-center text-blue-600 hover:underline mt-auto"
                >
                  Demander un devis
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <Badge className="mb-2">Comment ça marche</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Une plateforme adaptée à chaque profil
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Découvrez comment notre plateforme répond aux besoins
                  spécifiques de chaque utilisateur
                </p>
              </div>
            </div>

            <Tabs
              defaultValue="entreprise"
              className="w-full max-w-4xl mx-auto"
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger
                  value="entreprise"
                  className="flex items-center gap-2"
                >
                  <Building className="h-4 w-4" />
                  <span>Entreprises</span>
                </TabsTrigger>
                <TabsTrigger value="ecole" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Écoles</span>
                </TabsTrigger>
                <TabsTrigger
                  value="formateur"
                  className="flex items-center gap-2"
                >
                  <UserRound className="h-4 w-4" />
                  <span>Formateurs</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="entreprise" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">
                          Pour les entreprises
                        </h3>
                        <div className="space-y-4">
                          <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">
                              1
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Explorez notre catalogue
                              </h4>
                              <p className="text-gray-500">
                                Parcourez notre sélection de formations et de
                                formateurs.
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">
                              2
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Choisissez votre abonnement
                              </h4>
                              <p className="text-gray-500">
                                Sélectionnez l'offre qui correspond à vos
                                besoins.
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">
                              3
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Accédez aux informations complètes
                              </h4>
                              <p className="text-gray-500">
                                Consultez les détails des formations et des
                                profils d'experts.
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">
                              4
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Demandez des formations sur mesure
                              </h4>
                              <p className="text-gray-500">
                                Créez des programmes adaptés à vos besoins
                                spécifiques.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6">
                          <Link href="/auth/register">
                            <Button>S'inscrire en tant qu'entreprise</Button>
                          </Link>
                        </div>
                      </div>
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <img
                          src="/placeholder.svg?height=300&width=400&text=Entreprises"
                          alt="Entreprises"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="ecole" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">
                          Pour les écoles de formation
                        </h3>
                        <div className="space-y-4">
                          <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">
                              1
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Inscrivez votre établissement
                              </h4>
                              <p className="text-gray-500">
                                Créez votre profil avec vos informations et
                                agréments.
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">
                              2
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Choisissez votre pack
                              </h4>
                              <p className="text-gray-500">
                                Sélectionnez l'offre adaptée à votre volume de
                                formations.
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">
                              3
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Publiez vos formations
                              </h4>
                              <p className="text-gray-500">
                                Mettez en ligne vos programmes et contenus
                                pédagogiques.
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">
                              4
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Recrutez des formateurs
                              </h4>
                              <p className="text-gray-500">
                                Trouvez les meilleurs experts pour vos
                                formations.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6">
                          <Link href="/auth/register">
                            <Button>S'inscrire en tant qu'école</Button>
                          </Link>
                        </div>
                      </div>
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <img
                          src="/placeholder.svg?height=300&width=400&text=Écoles"
                          alt="Écoles de formation"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="formateur" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-4">
                          Pour les formateurs et consultants
                        </h3>
                        <div className="space-y-4">
                          <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">
                              1
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Créez votre profil
                              </h4>
                              <p className="text-gray-500">
                                Mettez en avant vos compétences et expériences.
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">
                              2
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Téléchargez votre CV
                              </h4>
                              <p className="text-gray-500">
                                Partagez vos certifications et références.
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">
                              3
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Choisissez votre abonnement
                              </h4>
                              <p className="text-gray-500">
                                Sélectionnez l'offre qui correspond à vos
                                besoins.
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">
                              4
                            </div>
                            <div>
                              <h4 className="font-medium">
                                Recevez des opportunités
                              </h4>
                              <p className="text-gray-500">
                                Soyez contacté par des entreprises et écoles de
                                formation.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6">
                          <Link href="/auth/register">
                            <Button>S'inscrire en tant que formateur</Button>
                          </Link>
                        </div>
                      </div>
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <img
                          src="/placeholder.svg?height=300&width=400&text=Formateurs"
                          alt="Formateurs et consultants"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Featured Formations Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <Badge className="mb-2">Formations populaires</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Découvrez nos formations les mieux notées
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Des programmes de qualité sélectionnés par notre communauté
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Développement Web Full Stack",
                  school: "École Numérique Paris",
                  rating: 4.9,
                  category: "Développement",
                  image: "/placeholder.svg?height=200&width=300&text=Web",
                },
                {
                  title: "Data Science & IA",
                  school: "DataTech Academy",
                  rating: 4.8,
                  category: "Data",
                  image: "/placeholder.svg?height=200&width=300&text=Data",
                },
                {
                  title: "Marketing Digital",
                  school: "Business School Lyon",
                  rating: 4.7,
                  category: "Marketing",
                  image: "/placeholder.svg?height=200&width=300&text=Marketing",
                },
              ].map((formation, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={formation.image || "/placeholder.svg"}
                      alt={formation.title}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-2">{formation.category}</Badge>
                    <h3 className="text-xl font-bold mb-2">
                      {formation.title}
                    </h3>
                    <p className="text-gray-500 mb-2 blur-sm hover:blur-none transition-all">
                      {formation.school}
                    </p>
                    <div className="flex items-center mb-4">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(formation.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      <span className="ml-2 text-sm text-gray-500">
                        {formation.rating.toFixed(1)}
                      </span>
                    </div>
                    <Link href={`/services/formations/${index + 1}`}>
                      <Button variant="outline" className="w-full">
                        Voir plus
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Link href="/services/formations">
                <Button variant="outline" className="flex items-center gap-2">
                  Voir toutes les formations
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <Badge className="mb-2">Témoignages</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ils nous font confiance
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Découvrez ce que nos utilisateurs disent de notre plateforme
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Marie Dupont",
                  role: "DRH, Entreprise Tech",
                  image: "/placeholder.svg?height=100&width=100&text=MD",
                  quote:
                    "FormationConnect nous a permis de trouver rapidement des formations de qualité pour nos équipes. Le processus est simple et efficace.",
                },
                {
                  name: "Jean Martin",
                  role: "Directeur, École de Formation",
                  image: "/placeholder.svg?height=100&width=100&text=JM",
                  quote:
                    "Grâce à la plateforme, nous avons pu augmenter notre visibilité et le nombre d'inscriptions à nos formations a considérablement augmenté.",
                },
                {
                  name: "Sophie Lefebvre",
                  role: "Formatrice indépendante",
                  image: "/placeholder.svg?height=100&width=100&text=SL",
                  quote:
                    "En tant que formatrice indépendante, j'ai pu développer mon activité et trouver de nouveaux clients grâce à FormationConnect.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p className="italic text-gray-600 mb-4">
                      "{testimonial.quote}"
                    </p>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <Badge className="mb-2">Questions fréquentes</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Besoin d'aide ?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Retrouvez les réponses aux questions les plus fréquemment
                  posées
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl space-y-4">
              {[
                {
                  question:
                    "Comment fonctionne l'inscription sur la plateforme ?",
                  answer:
                    "L'inscription est simple et gratuite. Vous choisissez votre profil (entreprise, école ou formateur), remplissez le formulaire avec vos informations et vous pouvez commencer à utiliser la plateforme. Des options premium sont disponibles pour accéder à toutes les fonctionnalités.",
                },
                {
                  question:
                    "Quels sont les différents abonnements disponibles ?",
                  answer:
                    "Nous proposons trois types d'abonnements : Essentiel, Professionnel et Entreprise. Chaque formule offre un niveau d'accès différent aux formations, profils de formateurs et fonctionnalités. Vous pouvez consulter notre page Tarifs pour plus de détails.",
                },
                {
                  question:
                    "Comment sont sélectionnées les formations sur la plateforme ?",
                  answer:
                    "Toutes les formations sont proposées par des écoles et organismes vérifiés. Nous vérifions les agréments et certifications. Les formations sont ensuite évaluées par les utilisateurs pour garantir leur qualité.",
                },
                {
                  question: "Comment demander une formation sur mesure ?",
                  answer:
                    "Vous pouvez soumettre une demande de formation sur mesure via notre formulaire dédié. Décrivez vos besoins spécifiques et nous vous mettrons en relation avec les écoles et formateurs les plus adaptés à votre demande.",
                },
                {
                  question: "Comment devenir formateur sur la plateforme ?",
                  answer:
                    "Pour devenir formateur, inscrivez-vous avec le profil 'Formateur/Consultant', complétez votre profil avec vos compétences et expériences, téléchargez votre CV et choisissez votre abonnement. Votre profil sera ensuite visible par les entreprises et écoles de formation.",
                },
              ].map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-gray-500 mb-4">
                Vous ne trouvez pas la réponse à votre question ?
              </p>
              <Link href="/contact">
                <Button>Contactez-nous</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                  Prêt à rejoindre notre communauté ?
                </h2>
                <p className="text-xl/relaxed text-blue-100 mb-6">
                  Inscrivez-vous gratuitement et découvrez tous les avantages de
                  notre plateforme de formation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/auth/register">
                    <Button className="bg-white text-blue-600 hover:bg-blue-50">
                      S'inscrire gratuitement
                    </Button>
                  </Link>
                  <Link href="/pricing">
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-blue-700"
                    >
                      Découvrir nos offres
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?height=400&width=600&text=Rejoignez-nous"
                  alt="Rejoignez notre plateforme"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <Badge className="mb-2">Contact</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Contactez-nous
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Notre équipe est à votre disposition pour répondre à toutes
                  vos questions
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col items-center space-y-4 p-6 shadow-md hover:shadow-lg transition-shadow">
                <Phone className="h-10 w-10 text-blue-600" />
                <h3 className="text-xl font-bold">Téléphone</h3>
                <p className="text-center text-gray-500">+33 1 23 45 67 89</p>
                <p className="text-center text-gray-500">
                  Du lundi au vendredi, 9h-18h
                </p>
              </Card>
              <Card className="flex flex-col items-center space-y-4 p-6 shadow-md hover:shadow-lg transition-shadow">
                <Mail className="h-10 w-10 text-blue-600" />
                <h3 className="text-xl font-bold">Email</h3>
                <p className="text-center text-gray-500">
                  contact@formation-platform.fr
                </p>
                <p className="text-center text-gray-500">
                  Réponse sous 24h ouvrées
                </p>
              </Card>
              <Card className="flex flex-col items-center space-y-4 p-6 shadow-md hover:shadow-lg transition-shadow">
                <MapPin className="h-10 w-10 text-blue-600" />
                <h3 className="text-xl font-bold">Adresse</h3>
                <p className="text-center text-gray-500">
                  123 Avenue de la Formation
                </p>
                <p className="text-center text-gray-500">75000 Paris, France</p>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
